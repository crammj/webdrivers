// status.constants.ts
export enum URLS {
  HOME = "https://system.81dojo.com/en/",
  CLUB = "https://system.81dojo.com/en/circles/314",
  ADD_EDIT_TOURNEY = "https://system.81dojo.com/en/tournaments/new",
  ADD_BLOG = "https://system.81dojo.com/en/forums/201/new_topic",
  TOURNEY = "https://system.81dojo.com/en/tournaments/${0}",
}

export const ErrorMessages = {
  NETWORK_ERROR: "Network error, please try again later.",
  NOT_FOUND: "Requested resource not found.",
  UNAUTHORIZED: "You are not authorized to access this resource.",
};

export const TOURNEY_COPY = {
  DESCRIPTION:
    "===Bare Bones===\n" +
    "\n" +
    "- When the tournament begins, simply schedule a game with the person directly above you and the person directly below you in the pairing table.\n" +
    "- To schedule a game, click on the appropriate cell in the table and message your partner your availability. You can also use the discord to coordinate. https://disboard.org/server/653255438904590372\n" +
    "\n" +
    "===Philosophy===\n" +
    'In a teaching ladder, each player plays (and analyzes!) a game with a person a rank below them, and a person a rank above them. Ideally, the difference between players should be 50-200 rating points, so you learn from someone who is just on the next "rung of the ladder" from you.',
  BANNER:
    "https://f.easyuploader.app/eu-prd/upload/20201123144819_75435955386933396d44.jpg",
};

export const TOURNEY_COPY_TEMPLATES = {
  TITLE: `Shogi Ladder Week ${0}`,
  SHORT_NAME: `SLW${0}`,
  BLOG_POST: `Welcome International Ladder Climbers!

We are pleased to announce the ${0} Weekly Shogi Ladder. 

Registration will conclude next week Friday at 23:30 UTC. The Ladder will commence on Friday at 23:59 UTC and conclude the following Thursday at 23:59 UTC. We hope you'll be able to join us for our weekly sparring session!

It's not a tournament, but a learning tool! If you choose to register please make a concerted effort to play your games otherwise future applications may be denied. Let's learn together :)

${1}

In club news: The club celebrates 578 members! We are very pleased to be a part of a globe-spanning friendly community of players who are enthusiastic about helping each other improve`,
};
