"use client"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons"

export default function TooltipWrapper({content}: {content: string}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger><QuestionMarkCircledIcon /></TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
