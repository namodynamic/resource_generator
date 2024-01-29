"use client";


import Link from "next/link";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PdfGenerator from '@/components/PdfGenerator'

type TemplateType = "general" | "elderly";

const LetterTemplate = () => {
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateType>("general");

  const handleTemplateClick = (template: TemplateType) => {
    setSelectedTemplate(template);
  };

  return (
    <section className="flex justify-between  gap-[57px] p-5 lg:mx-[81px] lg:my-[64px]">
      <div className="flex h-[741px] max-w-[582px] flex-1 flex-col items-start justify-center bg-white px-[56px] py-[61px]">
        <div className="flex-1  flex-col">
          <Link
            href="/letter-template"
            className="font-Onest text-base font-normal text-gray-900"
          >
            Go Back
          </Link>
          <h3 className="mt-4 font-Onest text-2xl font-bold text-gray-900">
            Generate Letter Now{" "}
          </h3>
          <p className="mt-10 font-Onest text-base font-normal leading-normal text-gray-900">
            Edit Receiver’s Information
          </p>
          <div className="flex flex-col gap-5">
            <Select>
              <SelectTrigger className="mt-5 h-[56px] w-[402px] p-4 py-[19px]">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Pastor</SelectItem>
                <SelectItem value="dark">Minister</SelectItem>
                <SelectItem value="system">Elder</SelectItem>
              </SelectContent>
            </Select>

            <Input
              placeholder="Enter Minister’s Name"
              type="text"
              className="h-[56px]"
            />
            <Input
              placeholder="Enter Ministry’s Name"
              type="text"
              className="h-[56px]"
            />
            <Input
              placeholder="Enter Location"
              type="text"
              className="h-[56px]"
            />
          </div>
        </div>
        <div className="inline-flex items-start gap-10 bg-red-500 p-4 md:px-[55px] md:py-[16px]">
          <button className="font-Onest text-base font-medium text-white">
            Generate Now
          </button>
        </div>
      </div>



      <div>
      <PdfGenerator/>
        <div className="mt-6 flex items-center justify-center gap-[15px]">
          <Button
            variant="outline"
            className="border-none bg-white/5 px-[35px] py-[16px] text-white"
            asChild
          >
            <Link href="/">Regenerate</Link>
          </Button>
          <Button
            variant="outline"
            className="border-none bg-red-500 px-[35px] py-[16px] text-white"
          >
            Download PDF
          </Button>
          <Button
            variant="outline"
            className="border-none bg-white/5 px-[35px] py-[16px] text-white"
          >
            Share
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LetterTemplate;
