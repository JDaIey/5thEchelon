import assert from "node:assert/strict"
import test from "node:test"
import { employeeBySlug, employees, grokbots, people } from "./employees.mjs"

test("keeps the current corporate team", () => {
  const slugs = people.map((person) => person.slug)
  assert.deepEqual(slugs, [
    "jordan-daley",
    "hunter-jude",
    "lauren-kay-barbour",
    "kayla",
    "matt",
    "johnny",
  ])
})

test("adds grokbots as employees", () => {
  const roster = employees()
  for (const bot of grokbots) {
    assert.equal(bot.kind, "grokbot")
    assert.equal(roster.find((employee) => employee.slug === bot.slug), bot)
    assert.equal(employeeBySlug(bot.slug)?.kind, "grokbot")
  }
  assert.equal(roster.length, people.length + grokbots.length)
  assert.ok(grokbots.length >= 1)
})
