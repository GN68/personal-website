---@diagnostic disable: param-type-mismatch
local window = js.global
local document = window.document


local input = document:getElementById("input")
local logs = document:getElementById("logs")
local sendButton = document:getElementById("send")

function print(...)
	local concat = "\n"
	local tbl = table.pack(...)
	for i = 1, tbl.n do
		concat = concat .. (i == 1 and '' or "  ") .. tostring(tbl[i])
	end
	logs.textContent = logs.textContent .. concat
end

local function generateTable(var, depth, content, spaces)
	local varType = type(var)
	-- spaces = spaces .. '  '
	depth = depth - 1
	if varType == "function" or (depth < 0 and varType == "table") then
		table.insert(content, '<')
		table.insert(content, tostring(var))
		table.insert(content, '>')
		return
	elseif varType == "string" then
		table.insert(content, '"')
		table.insert(content, (var:gsub('\n', '\\n')))
		table.insert(content, '"')
		return
	elseif varType ~= "table" then
		table.insert(content, tostring(var))
		return
	end
	local first = true
	table.insert(content, '{\n')
	local newSpaces = spaces .. '  '
	for i, v in pairs(var) do
		if not first then
			table.insert(content, ',\n')
		end
		first = false
		table.insert(content, newSpaces)
		if type(i) == "string" and i:match('^[%a_][%w_]*$') then
			table.insert(content, i)
		else
			table.insert(content, '[')
			generateTable(i, depth, content, newSpaces)
			table.insert(content, ']')
		end
		table.insert(content, ' = ')
		generateTable(v, depth, content, newSpaces)
	end
	if not first then
		table.insert(content, '\n')
	end
	table.insert(content, spaces..'}')
end

function printTable(tbl, depth)
	local content = {''}
	generateTable(tbl, depth or 1, content, '')

	print(table.concat(content))
end

print(_G._COPYRIGHT)

sendButton:addEventListener("click", function()
	local inputMethod = load(input.value,"input","t",_G)
	local inputMethodReturns = load("return "..input.value,"input","t",_G)
	print("> " .. input.value)


	local data = table.pack(pcall(inputMethodReturns))
	if not data[1] then -- is not OK
		data = table.pack(pcall(inputMethod))
		if not data[1] then
			print("[ERROR]: "..data[2])
		else
			print(table.unpack(data, 2, data.n))
		end
	else
		print(table.unpack(data, 2, data.n))
	end
end)