import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2>Ace your Interviews with our AI powered practice and valuable Feedbacks</h2>
                    <p className="text-lg">
                        Practice with real time AI Interviewer and improve using instant feedbacks
                    </p>

                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/interview">Start Your Interview</Link>
                    </Button>
                </div>

                <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Interviews for You </h2>

                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard { ...interview} key = {interview.id} />
                    ))}

                    {/*<p>You didn&apos;t take any interview</p>*/}
                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Start an Interview</h2>
                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard { ...interview} key = {interview.id}/>
                    ))}
                </div>
            </section>

        </>
    )
}

export default Page
