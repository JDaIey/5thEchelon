/**
 * 5th Echelon employees.
 *
 * People match the public corporate roster. Grok Bots are AI teammates
 * listed on that same roster, with kind "grokbot".
 */

export const people = [
  {
    id: "jordan-daley",
    slug: "jordan-daley",
    name: "Jordan Daley",
    title: "Chief Executive Officer",
    kind: "person",
    summary:
      "Jordan Daley leads 5th Echelon Media’s strategic direction, partnerships, and growth, connecting independent media with new platforms and audiences.",
    specialization: "Marketing Strategy, Executive Management, Public Relations",
    focusAreas: "Strategic Growth, Media Presence, Executive Leadership",
  },
  {
    id: "hunter-jude",
    slug: "hunter-jude",
    name: "Hunter Jude",
    title: "Operations & Development Lead",
    kind: "person",
    summary:
      "Hunter Jude leads operational development at 5th Echelon Media, building the systems and processes that support creators and platform growth.",
    specialization: "Platform Operations, Business Development, Growth Strategy",
    focusAreas: "Operational Excellence, Platform Development, Strategic Growth",
  },
  {
    id: "lauren-kay-barbour",
    slug: "lauren-kay-barbour",
    name: "Lauren Kay Barbour",
    title: "Head of Socials and Media",
    kind: "person",
    summary:
      "Lauren Kay Barbour leads social media and content distribution at 5th Echelon Media, connecting the network’s creators with their audiences.",
    specialization: "Social Media Strategy, Content Distribution, Digital Engagement",
    focusAreas: "Platform Growth, Audience Development, Brand Presence",
  },
  {
    id: "kayla",
    slug: "kayla",
    name: "Kayla",
    title: "Media Relations & Strategic Communications",
    kind: "person",
    summary:
      "Kayla manages media relations and strategic communications at 5th Echelon Media, building relationships with journalists, outlets, and partners.",
    specialization: "Media Relations, Public Relations, Strategic Communications",
    focusAreas: "Press Relations, Brand Messaging, Strategic Partnerships",
  },
  {
    id: "matt",
    slug: "matt",
    name: "Matt H.",
    title: "Backend Developer",
    kind: "person",
    summary:
      "Matt H. develops the backend infrastructure at 5th Echelon Media, supporting the platform’s data pipelines, API integrations, and databases.",
    specialization: "Backend Development, API Architecture, Database Engineering",
    focusAreas: "Server Infrastructure, Data Pipelines, System Scalability",
  },
  {
    id: "johnny",
    slug: "johnny",
    name: "Johnny J.",
    title: "Operations",
    kind: "person",
    summary:
      "Johnny J. coordinates daily operations at 5th Echelon Media, connecting creative production, technical teams, and internal workflows.",
    specialization: "Operations Management, Workflow Coordination, Team Alignment",
    focusAreas: "Operational Efficiency, Process Optimization, Cross-Team Coordination",
  },
]

export const grokbots = [
  {
    id: "grok-newsroom",
    slug: "grok-newsroom",
    name: "Grok Newsroom",
    title: "Grok Bot, Newsroom",
    kind: "grokbot",
    summary:
      "Grok Newsroom is an AI teammate on the 5th Echelon staff. It follows public reporting, drafts briefs, and hands finished copy back for a person to approve.",
    specialization: "News Research, Briefing, Drafting",
    focusAreas: "Public Sources, Corrections, Editorial Handoff",
  },
  {
    id: "grok-social",
    slug: "grok-social",
    name: "Grok Social",
    title: "Grok Bot, Social",
    kind: "grokbot",
    summary:
      "Grok Social is an AI teammate on the 5th Echelon staff. It prepares social drafts in the network’s voice and leaves them for a person to approve before anything is posted.",
    specialization: "Social Drafting, Distribution Support, Audience Research",
    focusAreas: "Draft Review, Platform Copy, Creator Support",
  },
  {
    id: "grok-operations",
    slug: "grok-operations",
    name: "Grok Operations",
    title: "Grok Bot, Operations",
    kind: "grokbot",
    summary:
      "Grok Operations is an AI teammate on the 5th Echelon staff. It tracks routines, assembles status, and hands exceptions back to the people who run the network.",
    specialization: "Routines, Status Tracking, Internal Coordination",
    focusAreas: "Follow-through, Handoffs, Operational Notes",
  },
]

export function employees() {
  return [...people, ...grokbots]
}

export function employeeBySlug(slug) {
  return employees().find((employee) => employee.slug === slug) ?? null
}
