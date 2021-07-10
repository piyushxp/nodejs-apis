const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// async function getData() {
// 	const res = await notion.databases.retrieve({
// 		database_id: process.env.NOTION_DATABASE_ID,
// 	});

// 	console.log(res);
// }

// async function getTags() {
// 	const database = await notion.databases.retrieve({
// 		database_id: process.env.NOTION_DATABASE_ID,
// 	});

// 	console.log(database.properties);
// }

function createData({ title, description, isProject, votes }) {
	notion.pages.create({
		parent: {
			database_id: process.env.NOTION_DATABASE_ID,
		},
		properties: {
			[process.env.NOTION_TITLE_ID]: {
				title: [
					{
						type: "text",
						text: {
							content: title,
						},
					},
				],
			},

			[process.env.NOTION_DESCRIPTION_ID]: {
				rich_text: [
					{
						type: "text",
						text: {
							content: description,
						},
					},
				],
			},

			[process.env.NOTION_PROJECT_ID]: {
				checkbox: isProject,
			},

			[process.env.NOTION_VOTES_ID]: {
				number: votes,
			},
		},
	});
}

createData({
	title: "Aur bhai",
	description: "Kya halchal!",
	isProject: false,
	votes: 3,
});
