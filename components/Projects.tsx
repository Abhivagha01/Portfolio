import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ProjectData } from "@/lib/Constant";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function ProjectsPage() {
	return (
		<div className="mx-auto mt-4">
			<hr />
			<h4 className="my-4 font-medium text-md md:text-xl">Projects</h4>
			
			{/* Responsive Grid */}
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{ProjectData.map(
					({ title, live, description, techstack }, index) => (
						<Card key={index} className="p-4">
							{/* Title and Live Link */}
							<div className="flex items-start justify-between mb-2">
								<h4 className="font-medium text-md">{title}</h4>
								<div className="flex gap-5">
									<Link
										href={live}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-400 hover:text-blue-800">
										<ExternalLinkIcon height={22} width={22} />
									</Link>
								</div>
							</div>

							{/* Description */}
							<p className="mb-2 text-xs text-gray-600 dark:text-neutral-400">
								{description}
							</p>

							{/* Tech Stack */}
							<div className="flex flex-wrap gap-1">
								{techstack.map((tech, index) => (
									<Badge
										key={index}
										variant="outline"
										className="text-xs px-2 py-0.5 text-gray-600 dark:text-neutral-400">
										{tech}
									</Badge>
								))}
							</div>
						</Card>
					),
				)}
			</div>
		</div>
	);
}

export default ProjectsPage;
