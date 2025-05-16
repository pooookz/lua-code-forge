
import { CourseData } from "@/types/course";

// This is the overview data shown in the course listing
export const allCourses: CourseData[] = [
  {
    id: "lua-basics",
    title: "Lua Basics",
    description: "Learn the fundamentals of Lua programming, including variables, functions, loops, and tables.",
    level: "Beginner",
    lessonsCount: 12,
    progress: 0,
    category: "fundamentals",
    imageUrl: "/images/courses/lua-basics.svg", 
    author: "Luna Script",
    duration: "4 weeks",
    rating: 4.8
  },
  {
    id: "game-dev-lua",
    title: "Game Development with Lua",
    description: "Build 2D games using Lua with the LÖVE framework. Learn game loops, physics, and collision detection.",
    level: "Intermediate",
    lessonsCount: 15,
    progress: 0,
    category: "gamedev",
    imageUrl: "/images/courses/game-dev.svg",
    author: "Alex GameDev",
    duration: "6 weeks",
    rating: 4.9
  },
  {
    id: "lua-oop",
    title: "Object-Oriented Programming in Lua",
    description: "Master the concepts of OOP in Lua with metatables, inheritance, and class-like structures.",
    level: "Intermediate",
    lessonsCount: 10,
    progress: 0,
    category: "advanced",
    imageUrl: "/images/courses/lua-oop.svg",
    author: "Oliver Objects",
    duration: "5 weeks",
    rating: 4.7
  },
  {
    id: "lua-data-analysis",
    title: "Data Analysis with Lua",
    description: "Learn how to process and analyze data using Lua's powerful table manipulation capabilities.",
    level: "Intermediate",
    lessonsCount: 8,
    progress: 0,
    category: "practical",
    imageUrl: "/images/courses/data-analysis.svg",
    author: "Dana Data",
    duration: "4 weeks",
    rating: 4.6
  },
  {
    id: "lua-web-dev",
    title: "Web Development with Lua",
    description: "Build web applications using Lua and frameworks like OpenResty and Lapis.",
    level: "Advanced",
    lessonsCount: 14,
    progress: 0,
    category: "practical",
    imageUrl: "/images/courses/web-dev.svg",
    author: "Walter Web",
    duration: "8 weeks",
    rating: 4.5
  },
  {
    id: "lua-embedded",
    title: "Lua for Embedded Systems",
    description: "Apply Lua in IoT devices and embedded systems with practical hardware examples.",
    level: "Advanced",
    lessonsCount: 10,
    progress: 0,
    category: "advanced",
    imageUrl: "/images/courses/embedded.svg",
    author: "Emma Embedded",
    duration: "6 weeks",
    rating: 4.8
  }
];

// This is the detailed course content used in the course detail page
export const courseContent = {
  "lua-basics": {
    title: "Lua Basics",
    description: "Learn the fundamentals of Lua programming, including variables, functions, loops, and tables.",
    level: "Beginner",
    lessonsCount: 12,
    totalExercises: 36,
    completedExercises: 0,
    author: "Luna Script",
    duration: "4 weeks",
    rating: 4.8,
    prerequisites: ["None - suitable for complete beginners"],
    skills: ["Basic programming concepts", "Lua syntax", "Problem-solving", "Data manipulation"],
    modules: [
      {
        id: "intro",
        title: "Introduction to Lua",
        description: "Get started with Lua programming language and understand its core concepts.",
        lessons: [
          {
            id: "what-is-lua",
            title: "What is Lua?",
            type: "reading",
            content: `# Introduction to Lua

Lua is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural programming, object-oriented programming, functional programming, data-driven programming, and data description.

## Key Features

- **Simple and Elegant Syntax**: Easy to learn and read
- **Efficient Performance**: Fast execution and small memory footprint
- **Portable**: Runs on many platforms from embedded devices to web servers
- **Embeddable**: Designed to be integrated into other applications
- **Extensible**: Can be extended with C/C++ functions

## Common Use Cases

- Game Development (Roblox, World of Warcraft)
- Embedded Systems
- Web Servers (OpenResty)
- Scientific Computing
- Configuration and Scripting

Let's start our journey into Lua programming!`
          },
          {
            id: "first-program",
            title: "Your First Lua Program",
            type: "exercise",
            content: `# Your First Lua Program

Let's write our first Lua program! We'll start with the classic "Hello, World!" example.

## The print Function

In Lua, we use the \`print\` function to output text to the console. It's one of the most basic but essential functions you'll use.

## Task

Write a program that prints "Hello, Lua World!" to the console.

## Example

\`\`\`lua
print("Hello, Lua World!")
\`\`\`

## Exercise

Modify the code to print both "Hello, Lua World!" and "I am learning Lua!" on separate lines.`,
            initialCode: "-- Write your code here\n",
            solution: `print("Hello, Lua World!")
print("I am learning Lua!")`
          },
          {
            id: "lua-comments",
            title: "Comments in Lua",
            type: "reading",
            content: `# Comments in Lua

Comments are text that the Lua interpreter ignores. They are used to explain code and make it more readable.

## Single-line Comments

In Lua, single-line comments start with two hyphens (\`--\`):

\`\`\`lua
-- This is a single-line comment
print("Hello") -- This comment is at the end of a line
\`\`\`

## Multi-line Comments

For multi-line comments, Lua uses the following syntax:

\`\`\`lua
--[[
  This is a multi-line comment.
  It can span multiple lines.
  The interpreter will ignore everything until it sees the closing brackets.
]]
\`\`\`

## Best Practices

- Use comments to explain *why* you did something, not *what* you did
- Keep comments up-to-date when you change your code
- Use meaningful variable and function names instead of relying too heavily on comments`
          }
        ]
      },
      {
        id: "variables",
        title: "Variables and Data Types",
        description: "Learn about variables, data types, and basic operations in Lua.",
        lessons: [
          {
            id: "variables-intro",
            title: "Understanding Variables",
            type: "exercise",
            content: `# Variables in Lua

Variables are used to store data that can be used and modified in your programs.

## Variable Declaration

In Lua, you can declare variables using the following syntax:
\`\`\`lua
local name = value
\`\`\`

The \`local\` keyword makes the variable only accessible in the current scope.

## Task

Create three variables:
1. A number variable named 'age' with value 25
2. A string variable named 'name' with your name
3. A boolean variable named 'isStudent' with value true

Then print all three variables.`,
            initialCode: "-- Declare your variables here\n",
            solution: `local age = 25
local name = "John"
local isStudent = true

print("Age:", age)
print("Name:", name)
print("Is Student:", isStudent)`
          },
          {
            id: "data-types",
            title: "Data Types in Lua",
            type: "reading",
            content: `# Data Types in Lua

Lua is dynamically typed, which means you don't need to declare the type of a variable. The type is determined by the value assigned to it.

## Basic Data Types

Lua has eight basic types:

- **nil**: Represents the absence of a useful value
- **boolean**: Either \`true\` or \`false\`
- **number**: Represents both integer and floating-point numbers
- **string**: Sequence of characters
- **function**: A piece of code that can be called
- **table**: The only data structure in Lua, used to represent arrays, objects, and more
- **userdata**: Custom C data
- **thread**: Represents independent threads of execution

## Checking Types

You can check the type of a value using the \`type\` function:

\`\`\`lua
print(type("Hello"))  -- Outputs: string
print(type(10))       -- Outputs: number
print(type(true))     -- Outputs: boolean
print(type({}))       -- Outputs: table
print(type(print))    -- Outputs: function
\`\`\``
          }
        ]
      },
      {
        id: "functions",
        title: "Functions and Control Flow",
        description: "Master function definitions and control flow statements in Lua.",
        lessons: [
          {
            id: "functions-basics",
            title: "Creating Functions",
            type: "exercise",
            content: `# Functions in Lua

Functions are blocks of code that can be called to perform specific tasks. They can take parameters and return values.

## Function Declaration

In Lua, you can declare a function using the following syntax:

\`\`\`lua
function functionName(param1, param2, ...)
    -- function body
    return value -- optional
end
\`\`\`

You can also assign functions to variables:

\`\`\`lua
local functionName = function(param1, param2, ...)
    -- function body
    return value -- optional
end
\`\`\`

## Task

Create a function called \`calculateArea\` that:
1. Takes two parameters: \`length\` and \`width\`
2. Calculates and returns the area (length × width)
3. Call the function with values 5 and 10, and print the result

`,
            initialCode: "-- Write your function here\n",
            solution: `function calculateArea(length, width)
    return length * width
end

-- Call the function and print the result
local area = calculateArea(5, 10)
print("The area is:", area)`
          }
        ]
      }
    ]
  },
  "game-dev-lua": {
    title: "Game Development with Lua",
    description: "Build 2D games using Lua with the LÖVE framework.",
    level: "Intermediate",
    lessonsCount: 15,
    totalExercises: 45,
    completedExercises: 0,
    author: "Alex GameDev",
    duration: "6 weeks",
    rating: 4.9,
    prerequisites: ["Basic Lua knowledge", "Understanding of programming concepts"],
    skills: ["Game design", "Animation", "Physics simulation", "User input handling"],
    modules: [
      {
        id: "game-basics",
        title: "Game Development Basics",
        description: "Learn the fundamentals of game development with Lua.",
        lessons: [
          {
            id: "game-loop",
            title: "The Game Loop",
            type: "reading",
            content: `# Understanding the Game Loop

The game loop is the heart of every game. It's responsible for continuously updating the game state and rendering graphics.

## Basic Structure

A game loop typically consists of three main parts:
1. Input Processing
2. Update Game State
3. Render Graphics

## Example Game Loop

\`\`\`lua
function love.load()
    -- Initialize game state
end

function love.update(dt)
    -- Update game state
end

function love.draw()
    -- Render graphics
end
\`\`\`

In the next lesson, we'll implement a basic game loop!`
          },
          {
            id: "2d-coordinates",
            title: "Understanding 2D Coordinates",
            type: "reading",
            content: `# 2D Coordinate Systems in Games

In 2D game development, understanding coordinates is crucial for positioning game objects on the screen.

## The Cartesian Coordinate System

In most 2D games, the coordinate system starts from the top-left corner of the screen:
- The x-axis increases from left to right
- The y-axis increases from top to bottom

This means:
- Position (0, 0) is at the top-left corner
- Increasing x moves right
- Increasing y moves down

## Example: Positioning an Object

\`\`\`lua
function love.draw()
    -- Draw a rectangle at position (100, 150) with width 50 and height 30
    love.graphics.rectangle("fill", 100, 150, 50, 30)
end
\`\`\`

## Transformations

You can also use transformations to change how coordinates are interpreted:

\`\`\`lua
function love.draw()
    love.graphics.push()
    love.graphics.translate(400, 300)  -- Move origin to center of screen
    love.graphics.rectangle("fill", -25, -15, 50, 30)  -- Draw centered rectangle
    love.graphics.pop()
end
\`\`\`

Understanding coordinates is essential for proper object placement, collision detection, and camera systems.`
          },
          {
            id: "creating-objects",
            title: "Creating Game Objects",
            type: "exercise",
            content: `# Creating Game Objects in Lua

In game development, we need to create and manage game objects like players, enemies, and items.

## Object-Oriented Approach in Lua

Although Lua doesn't have built-in classes, we can create object-like structures using tables and metatables:

\`\`\`lua
-- Define a simple game object
GameObject = {}
GameObject.__index = GameObject

function GameObject.new(x, y, width, height)
    local self = setmetatable({}, GameObject)
    self.x = x
    self.y = y
    self.width = width
    self.height = height
    return self
end

function GameObject:update(dt)
    -- Update logic
end

function GameObject:draw()
    love.graphics.rectangle("fill", self.x, self.y, self.width, self.height)
end
\`\`\`

## Task

Create a Player object that inherits from GameObject with the following:
1. A new function that creates a player at position (100, 100) with size 50x50
2. An update method that moves the player based on keyboard input
3. A draw method that renders the player as a blue rectangle

Use the following keys for movement:
- Arrow keys or WASD for moving up, down, left, and right

## Starting Code

\`\`\`lua
-- GameObject definition from above
GameObject = {}
GameObject.__index = GameObject

function GameObject.new(x, y, width, height)
    local self = setmetatable({}, GameObject)
    self.x = x
    self.y = y
    self.width = width
    self.height = height
    return self
end

function GameObject:update(dt)
    -- Base update logic
end

function GameObject:draw()
    love.graphics.rectangle("fill", self.x, self.y, self.width, self.height)
end

-- Now create your Player class below
\`\`\``,
            initialCode: "-- Write your Player class here\n",
            solution: `Player = {}
Player.__index = Player

function Player.new()
    local self = setmetatable({}, Player)
    self.x = 100
    self.y = 100
    self.width = 50
    self.height = 50
    self.speed = 200
    return self
end

function Player:update(dt)
    -- Handle keyboard input
    if love.keyboard.isDown("up") or love.keyboard.isDown("w") then
        self.y = self.y - self.speed * dt
    end
    if love.keyboard.isDown("down") or love.keyboard.isDown("s") then
        self.y = self.y + self.speed * dt
    end
    if love.keyboard.isDown("left") or love.keyboard.isDown("a") then
        self.x = self.x - self.speed * dt
    end
    if love.keyboard.isDown("right") or love.keyboard.isDown("d") then
        self.x = self.x + self.speed * dt
    end
end

function Player:draw()
    love.graphics.setColor(0, 0, 1) -- Blue color
    love.graphics.rectangle("fill", self.x, self.y, self.width, self.height)
    love.graphics.setColor(1, 1, 1) -- Reset color to white
end`
          }
        ]
      },
      {
        id: "game-physics",
        title: "Game Physics and Collision Detection",
        description: "Learn how to implement realistic physics and collision detection in your games.",
        lessons: [
          {
            id: "basic-collisions",
            title: "Basic Collision Detection",
            type: "reading",
            content: `# Basic Collision Detection

Collision detection is fundamental to games. It allows us to determine when game objects interact with each other.

## Axis-Aligned Bounding Box (AABB)

The simplest form of collision detection uses rectangles that are aligned with the coordinate axes:

\`\`\`lua
function checkCollision(a, b)
    -- Return true if a and b overlap, false otherwise
    local a_left = a.x
    local a_right = a.x + a.width
    local a_top = a.y
    local a_bottom = a.y + a.height
    
    local b_left = b.x
    local b_right = b.x + b.width
    local b_top = b.y
    local b_bottom = b.y + b.height
    
    -- If any of these conditions is true, the rectangles do not overlap
    if a_right <= b_left or
       b_right <= a_left or
       a_bottom <= b_top or
       b_bottom <= a_top then
        return false
    end
    
    -- Otherwise, they overlap
    return true
end
\`\`\`

## Example Usage

\`\`\`lua
player = { x = 100, y = 150, width = 50, height = 50 }
enemy = { x = 130, y = 170, width = 50, height = 50 }

if checkCollision(player, enemy) then
    print("Collision detected!")
end
\`\`\`

In the next lesson, we'll explore more advanced collision techniques and response!`
          }
        ]
      }
    ]
  },
  "lua-oop": {
    title: "Object-Oriented Programming in Lua",
    description: "Master object-oriented programming concepts in Lua.",
    level: "Intermediate",
    lessonsCount: 10,
    totalExercises: 30,
    completedExercises: 0,
    author: "Oliver Objects",
    duration: "5 weeks",
    rating: 4.7,
    prerequisites: ["Lua Basics", "Understanding of programming fundamentals"],
    skills: ["Object-oriented design", "Metatable manipulation", "Inheritance implementation", "Code organization"],
    modules: [
      {
        id: "oop-basics",
        title: "OOP Fundamentals",
        description: "Learn the basics of object-oriented programming in Lua.",
        lessons: [
          {
            id: "tables-as-objects",
            title: "Tables as Objects",
            type: "exercise",
            content: `# Using Tables as Objects

In Lua, tables are the primary way to implement objects. Let's learn how to create and use them.

## Basic Object Creation

\`\`\`lua
local person = {
    name = "John",
    age = 30,
    sayHello = function(self)
        print("Hello, I'm " .. self.name)
    end
}
\`\`\`

## Task

Create a 'Car' object with:
- Properties: make, model, year
- Method: displayInfo() that prints all properties`,
            initialCode: "-- Create your Car object here\n",
            solution: `local car = {
    make = "Toyota",
    model = "Corolla",
    year = 2023,
    displayInfo = function(self)
        print(self.year .. " " .. self.make .. " " .. self.model)
    end
}

car:displayInfo()`
          },
          {
            id: "metatables",
            title: "Metatables and Metamethods",
            type: "reading",
            content: `# Metatables and Metamethods in Lua

Metatables allow you to change the behavior of a table. Metamethods are special functions that define how operations on tables should behave.

## Setting a Metatable

\`\`\`lua
local t = {}
local mt = {}
setmetatable(t, mt)
\`\`\`

## Common Metamethods

- \`__index\`: Called when accessing non-existent keys
- \`__newindex\`: Called when setting non-existent keys
- \`__add\`, \`__sub\`, \`__mul\`, \`__div\`: Define arithmetic operations
- \`__eq\`, \`__lt\`, \`__le\`: Define comparison operations
- \`__call\`: Makes the table callable like a function
- \`__tostring\`: Defines string conversion behavior

## Example: __index Metamethod

\`\`\`lua
local t = {}
local mt = {
    __index = function(table, key)
        return "Key '" .. key .. "' not found!"
    end
}
setmetatable(t, mt)

print(t.name) -- Output: Key 'name' not found!
\`\`\`

## Example: __add Metamethod

\`\`\`lua
local vector = {}
vector.__index = vector

function vector.new(x, y)
    return setmetatable({x = x, y = y}, vector)
end

function vector:__add(other)
    return vector.new(self.x + other.x, self.y + other.y)
end

local v1 = vector.new(1, 2)
local v2 = vector.new(3, 4)
local v3 = v1 + v2

print(v3.x, v3.y) -- Output: 4 6
\`\`\`

Metatables are a powerful feature that enables object-oriented programming in Lua.`
          }
        ]
      },
      {
        id: "inheritance",
        title: "Inheritance and Polymorphism",
        description: "Implement inheritance and polymorphism in Lua using metatables.",
        lessons: [
          {
            id: "inheritance-basics",
            title: "Basic Inheritance",
            type: "exercise",
            content: `# Inheritance in Lua

Inheritance allows one class to inherit properties and methods from another class. In Lua, we can implement this using metatables.

## Basic Inheritance Pattern

\`\`\`lua
-- Parent class
local Animal = {}
Animal.__index = Animal

function Animal.new(name)
    local self = setmetatable({}, Animal)
    self.name = name
    return self
end

function Animal:speak()
    return "Animal sound"
end

-- Child class
local Dog = {}
Dog.__index = Dog
setmetatable(Dog, {__index = Animal}) -- Dog inherits from Animal

function Dog.new(name, breed)
    local self = setmetatable(Animal.new(name), Dog)
    self.breed = breed
    return self
end

function Dog:speak()
    return "Woof!"
end

-- Usage
local myDog = Dog.new("Rex", "German Shepherd")
print(myDog.name)  -- inherited from Animal
print(myDog:speak())  -- overridden in Dog
\`\`\`

## Task

Create a class hierarchy for shapes:
1. A base \`Shape\` class with:
   - Properties: x, y (position)
   - Method: \`area()\` that returns 0
   - Method: \`describe()\` that returns a description string

2. A derived \`Rectangle\` class that:
   - Inherits from Shape
   - Adds width and height properties
   - Overrides \`area()\` to calculate rectangle area
   - Overrides \`describe()\` to return rectangle description

3. Create instances of both shapes and test their methods`,
            initialCode: "-- Create your Shape and Rectangle classes here\n",
            solution: `-- Shape class
local Shape = {}
Shape.__index = Shape

function Shape.new(x, y)
    local self = setmetatable({}, Shape)
    self.x = x
    self.y = y
    return self
end

function Shape:area()
    return 0
end

function Shape:describe()
    return "Shape at position (" .. self.x .. ", " .. self.y .. ")"
end

-- Rectangle class
local Rectangle = {}
Rectangle.__index = Rectangle
setmetatable(Rectangle, {__index = Shape}) -- Rectangle inherits from Shape

function Rectangle.new(x, y, width, height)
    local self = setmetatable(Shape.new(x, y), Rectangle)
    self.width = width
    self.height = height
    return self
end

function Rectangle:area()
    return self.width * self.height
end

function Rectangle:describe()
    return "Rectangle at position (" .. self.x .. ", " .. self.y .. ") with width " .. 
           self.width .. " and height " .. self.height .. ", area: " .. self:area()
end

-- Test the classes
local shape = Shape.new(10, 20)
local rect = Rectangle.new(30, 40, 50, 60)

print(shape:describe())
print(rect:describe())
print("Shape area:", shape:area())
print("Rectangle area:", rect:area())`
          }
        ]
      }
    ]
  },
  "lua-data-analysis": {
    title: "Data Analysis with Lua",
    description: "Learn how to process and analyze data using Lua's powerful table manipulation capabilities.",
    level: "Intermediate",
    lessonsCount: 8,
    totalExercises: 24,
    completedExercises: 0,
    author: "Dana Data",
    duration: "4 weeks",
    rating: 4.6,
    prerequisites: ["Lua Basics", "Understanding of basic mathematics"],
    skills: ["Data processing", "Statistical analysis", "Data visualization", "Table manipulation"],
    modules: [
      {
        id: "data-fundamentals",
        title: "Data Analysis Fundamentals",
        description: "Learn the basics of data analysis with Lua.",
        lessons: [
          {
            id: "intro-to-data",
            title: "Introduction to Data Analysis",
            type: "reading",
            content: `# Introduction to Data Analysis with Lua

Data analysis involves inspecting, cleansing, transforming, and modeling data to discover useful information. Let's explore how Lua can be used for data analysis.

## Why Use Lua for Data Analysis?

- **Simplicity:** Lua's clean syntax makes data manipulation code readable
- **Performance:** Lua is fast and has a small memory footprint
- **Embeddability:** Can integrate with C/C++ libraries for numerical computation
- **Tables:** Lua's table structure is versatile for different data formats

## Basic Data Operations in Lua

### Loading Data

\`\`\`lua
-- Loading data from a CSV file
function loadCSV(filename)
    local data = {}
    local file = io.open(filename, "r")
    local header = file:read()
    local headers = {}
    
    for h in header:gmatch("[^,]+") do
        table.insert(headers, h)
    end
    
    for line in file:lines() do
        local row = {}
        local i = 1
        for value in line:gmatch("[^,]+") do
            row[headers[i]] = value
            i = i + 1
        end
        table.insert(data, row)
    end
    
    file:close()
    return data
end
\`\`\`

### Basic Statistics

\`\`\`lua
function mean(data)
    local sum = 0
    for _, v in ipairs(data) do
        sum = sum + v
    end
    return sum / #data
end

function median(data)
    -- Sort a copy of the data
    local sorted = {}
    for i, v in ipairs(data) do
        sorted[i] = v
    end
    table.sort(sorted)
    
    local n = #sorted
    if n % 2 == 0 then
        return (sorted[n/2] + sorted[n/2+1]) / 2
    else
        return sorted[math.ceil(n/2)]
    end
end
\`\`\`

In the following lessons, we'll explore more advanced data analysis techniques!`
          }
        ]
      }
    ]
  },
  "lua-web-dev": {
    title: "Web Development with Lua",
    description: "Build web applications using Lua and frameworks like OpenResty and Lapis.",
    level: "Advanced",
    lessonsCount: 14,
    totalExercises: 42,
    completedExercises: 0,
    author: "Walter Web",
    duration: "8 weeks",
    rating: 4.5,
    prerequisites: ["Lua Basics", "Understanding of web concepts", "Basic HTML/CSS knowledge"],
    skills: ["Web server setup", "Database integration", "API development", "Template rendering"],
    modules: [
      {
        id: "web-intro",
        title: "Introduction to Web Development with Lua",
        description: "Learn the basics of web development using Lua.",
        lessons: [
          {
            id: "lua-web-overview",
            title: "Lua in Web Development",
            type: "reading",
            content: `# Lua in Web Development

Lua might not be the first language that comes to mind for web development, but it offers some unique advantages and has been used in several web frameworks.

## Popular Lua Web Frameworks

### OpenResty

OpenResty is a platform that combines Nginx and LuaJIT, allowing you to use Lua to extend Nginx's functionality. It's highly performant and used by many large-scale websites.

\`\`\`lua
-- Example OpenResty route handler
location /hello {
    content_by_lua_block {
        ngx.say("<h1>Hello, World!</h1>")
    }
}
\`\`\`

### Lapis

Lapis is a web framework for Lua that runs on OpenResty. It provides a clean syntax for defining routes and actions.

\`\`\`lua
-- Example Lapis application
local lapis = require("lapis")
local app = lapis.Application()

app:get("/", function()
  return "Welcome to my site!"
end)

app:get("/user/:id", function(self)
  return "Hello, user " .. self.params.id
end)

return app
\`\`\`

### Sailor

Sailor is an MVC web framework written in Lua that uses either Apache or Nginx as the web server.

\`\`\`lua
-- Example Sailor controller
function index(page)
    page:render('index', {title = "My Sailor App"})
end
\`\`\`

## Why Use Lua for Web Development?

- **Performance:** Lua is fast, especially with LuaJIT
- **Simplicity:** Clean syntax for handling routes and requests
- **Embeddability:** Can be used alongside other systems
- **Low Resource Usage:** Ideal for high-concurrency applications

In the following lessons, we'll explore these frameworks in more detail!`
          }
        ]
      }
    ]
  },
  "lua-embedded": {
    title: "Lua for Embedded Systems",
    description: "Apply Lua in IoT devices and embedded systems with practical hardware examples.",
    level: "Advanced",
    lessonsCount: 10,
    totalExercises: 30,
    completedExercises: 0,
    author: "Emma Embedded",
    duration: "6 weeks",
    rating: 4.8,
    prerequisites: ["Lua Basics", "Understanding of computer hardware", "Basic electronics knowledge (recommended)"],
    skills: ["Embedded programming", "Hardware interfacing", "Resource optimization", "Real-time systems"],
    modules: [
      {
        id: "embedded-intro",
        title: "Introduction to Embedded Lua",
        description: "Learn the basics of using Lua in embedded systems.",
        lessons: [
          {
            id: "why-lua-embedded",
            title: "Why Lua for Embedded Systems?",
            type: "reading",
            content: `# Why Use Lua for Embedded Systems?

Lua is an excellent choice for embedded systems due to several key advantages:

## Key Advantages

### 1. Small Footprint

Lua's interpreter typically requires only about 150-200KB of memory, making it suitable for resource-constrained devices.

### 2. Portability

Lua is written in ANSI C and can be compiled on almost any platform, from microcontrollers to more powerful systems.

### 3. Extensibility

Lua can easily interface with C/C++ code, allowing you to wrap hardware-specific functionality and expose it to Lua scripts.

### 4. Simple Syntax

Lua's clean syntax makes it easier to write and maintain code for embedded applications.

### 5. Scripting Capabilities

Using Lua as a scripting layer allows for changing application behavior without recompiling the entire firmware.

## Common Embedded Platforms Using Lua

- **NodeMCU:** A popular IoT platform based on the ESP8266 that uses Lua
- **eLua:** A project that brings the full implementation of Lua to various microcontrollers
- **Espruino:** While primarily JavaScript-focused, some versions support Lua
- **Raspberry Pi:** Can run full Lua implementations for IoT applications

## Example: Blinking an LED with NodeMCU Lua

\`\`\`lua
-- Define the LED pin
local pin = 4
gpio.mode(pin, gpio.OUTPUT)

-- Set up a timer to toggle the LED every second
local ledState = false
tmr.create():alarm(1000, tmr.ALARM_AUTO, function()
    ledState = not ledState
    gpio.write(pin, ledState and gpio.HIGH or gpio.LOW)
    print("LED is " .. (ledState and "ON" or "OFF"))
end)
\`\`\`

In the upcoming lessons, we'll explore more complex embedded applications with Lua!`
          }
        ]
      }
    ]
  }
};
