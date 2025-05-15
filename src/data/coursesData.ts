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
    category: "fundamentals"
  },
  {
    id: "game-dev-lua",
    title: "Game Development with Lua",
    description: "Build 2D games using Lua with the LÖVE framework. Learn game loops, physics, and collision detection.",
    level: "Intermediate",
    lessonsCount: 15,
    progress: 0,
    category: "gamedev"
  },
  {
    id: "lua-oop",
    title: "Object-Oriented Programming in Lua",
    description: "Master the concepts of OOP in Lua with metatables, inheritance, and class-like structures.",
    level: "Intermediate",
    lessonsCount: 10,
    progress: 0,
    category: "advanced"
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
          }
        ]
      }
    ]
  }
};