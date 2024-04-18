"use client"
 import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 import { Icons } from "./icons"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
export function ProfileForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

 
  return (
    <div className="grid gap-6">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="name@example.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
      </form>
    </Form>
     <div className="relative">
     <div className="absolute inset-0 flex items-center">
       <span className="w-full border-t" />
     </div>
     <div className="relative flex justify-center text-xs uppercase">
       <span className="bg-background px-2 text-muted-foreground">
         Or continue with
       </span>
     </div>
   </div>
   <Button variant="outline" type="button" disabled={isLoading}>
     {isLoading ? (
       <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
     ) : (
       <Icons.google className="mr-2 h-4 w-4" />
     )}{" "}
     Google
   </Button>
    </div>
  )
}