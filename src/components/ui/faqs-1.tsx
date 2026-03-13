import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export function FaqsSection() {
	return (
		<div className="mx-auto w-full max-w-5xl space-y-7 px-4 pt-16 mb-20">
			<div className="space-y-2">
				<h2 className="text-3xl font-bold md:text-4xl text-center text-[#D00636]">FAQs</h2>
			</div>
			<Accordion
				type="single"
				collapsible
				className="bg-card dark:bg-card/50 w-full -space-y-px rounded-lg "
				defaultValue="item-1"
			>
				{questions.map((item) => (
					<AccordionItem
						value={item.id}
						key={item.id}
						className="relative border-x first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
					>
						<AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline text-[#D00636]">
							{item.title}
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground pb-4 px-4">
							{item.content}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
			
		</div>
	);
}

const questions = [
	{
		id: 'item-1',
		title: 'Is Rishihood University in Sonipat approved by UGC?',
		content:
			'Yes, Rishihood University is an UGC approved university that offers multidisciplinary undergraduate programs including BBA, B Design, B Sc Hons Psychology and B. Tech in Computer Science',
	},
	{
		id: 'item-2',
		title: "What makes Rishihood University a preferred choice for Bachelor's degree?",
		content:
			'The programs offered by RU are more than just an undergraduate degree. The objective of the curriculum is to make students self-aware of their potential and capability. The programs aimed to teach students academic and cultural values to make them true leaders for tomorrow. RU also has a great record of placements and internships.',
	},
	{
		id: 'item-3',
		title: 'Where is Rishihoood University located?',
		content:
			`Rishihood University is considered as one of the top university in Sonipat, Haryana which is a part of Delhi NCR region. It is just 50 minutes way from Delhi’s Jahangir Puri Metro Station.

			Here is the address:
			Rishihood University, NH-44 (GT Road), Near Bahalgarh Chowk,
			Delhi NCR, Sonipat,
			Haryana, India 131021
			`
	},
	{
		id: 'item-4',
		title: 'What is the average package offered to students during placements at Rishihood University?',
		content:
			`
			Rishihood’s Career Advancement Team aims to assist students to get a role in top companies in India and across the globe. We have:

			Highest CTC: 10 LPA
			Average CTC: 7 LPA
			Median CTC: 6 LPA`
	},
	{
		id: 'item-5',
		title: "What makes Rishihood University a preferred choice for Bachelor's degree?",
		content:
			'Firstly choose which component you need to copy by using our super fast search page, then copy the respective screen size you need by clicking on the copy button. Now you have the Figma Component in your clipboard you can paste ( “cmd + v” or “ctrl + v” ) it anywhere in your design files.',
	},
];
