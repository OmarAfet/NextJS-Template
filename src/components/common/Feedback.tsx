"use client";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { useState, useEffect } from "react";
import { Frown, Meh, Smile, X } from "lucide-react";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendDiscordEmbed } from "@/actions/Feedback";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  feedback: z.string().min(1, { message: "Please provide some feedback." }),
  emoji: z.string().nullable().optional(),
});

export default function Feedback({ className }: { className?: string }) {
  const placeholders = ["A neat idea might be...", "Maybe we could try...", "What about adding...", "I'm wondering if...", "Another approach could be...", "One other option is...", "An alternative way..."];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      feedback: "",
      emoji: null,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    await sendDiscordEmbed(values.feedback, values.emoji as string);
  }

  const handleEmojiClick = (emoji: string) => {
    setSelectedEmoji(emoji);
    form.setValue("emoji", emoji);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="outline" className={cn("text-muted-foreground hover:border-foreground/20", className)}>
          Feedback
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogCancel className="absolute top-2 right-2 p-1 h-9 w-9 border-none text-muted-foreground">
          <X />
        </AlertDialogCancel>
        <AlertDialogHeader className="center">
          <div className="text-3xl font-bold">Share your feedback</div>
          <p className="text-muted-foreground">Help us improve by sharing your thoughts.</p>
        </AlertDialogHeader>
        <Form {...form}>
          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea id="message" rows={5} className="w-full" placeholder={placeholders[placeholderIndex]} {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </Form>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className={`flex-1 border-2 ${selectedEmoji === "frown" && "border-red-500 text-white"}`} onClick={() => handleEmojiClick("frown")}>
            <Frown />
          </Button>
          <Button variant="outline" size="icon" className={`flex-1 border-2 ${selectedEmoji === "meh" && "border-yellow-500 text-white"}`} onClick={() => handleEmojiClick("meh")}>
            <Meh />
          </Button>
          <Button variant="outline" size="icon" className={`flex-1 border-2 ${selectedEmoji === "smile" && "border-green-500 text-white"}`} onClick={() => handleEmojiClick("smile")}>
            <Smile />
          </Button>
        </div>
        <AlertDialogFooter>
          <AlertDialogAction onClick={form.handleSubmit(onSubmit)} className="flex-1 animate" disabled={!form.formState.isDirty || !form.getValues("feedback").trim() || !form.getValues("emoji")}>
            Submit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
