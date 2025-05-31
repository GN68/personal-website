<template>
  <ContentPanel>
    <p v-if="!srcUrl">Missing `src` parameter.</p>
    <div v-else>
      <h1>{{ fileName }}</h1>
      <div v-if="markdownContent">
        <DocsMarkdown :content="markdownContent" />
      </div>
      <div v-else>
        <p>No documentation available.</p>
      </div>
    </div>
  </ContentPanel>
</template>

<script lang="ts" setup>
import ContentPanel from "@/components/ContentPanel.vue";
import DocsMarkdown from "@/components/DocsMarkdown.vue";
import { ref, onMounted } from "vue";

const srcUrl = new URLSearchParams(window.location.search).get("src");
const autoDownload = new URLSearchParams(window.location.search).get("auto") === "true";
const fileName = ref<string>("");

const markdownContent = ref<string>("");

const downloadFile = async (url: string, filename: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch file");
    }

    const blob = await response.blob();
    const downloadUrl = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error("Error:", error);
  }
};

const tryLoadMarkdown = async (rawUrl: string) => {
  // Transform the .lua file to .md file
  const mdUrl = rawUrl.replace(/\.lua$/, ".md");
  try {
    const response = await fetch(mdUrl);
    if (!response.ok) {
      console.log("No markdown file found.");
      return;
    }
    markdownContent.value = await response.text();
  } catch (error) {
    console.error("Error fetching markdown:", error);
  }
};

onMounted(async () => {
  if (srcUrl) {
    const rawUrl = srcUrl
      .replace("https://github.com/", "https://raw.githubusercontent.com/")
      .replace("/blob/", "/");
    
      const parts = rawUrl.split("/");
    fileName.value = parts[parts.length - 1] || "downloaded-file";

    // Try to load corresponding .md file
    await tryLoadMarkdown(rawUrl);

    // Auto-download original file if requested
    if (autoDownload) {
      const parts = rawUrl.split("/");
      const filename = parts[parts.length - 1] || "downloaded-file";
      downloadFile(rawUrl, filename);
    }
  }
});
</script>
