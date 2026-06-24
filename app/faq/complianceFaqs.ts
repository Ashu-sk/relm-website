import { faqs as baseFaqs, type Faq } from "@/lib/faqData";

const SAFE_OVERRIDES: Record<string, Faq> = {
  "What is PageStock?": {
    question: "What is PageStock?",
    answer:
      "PageStock is rarelm's way of turning support into standing. Back a verified creator or page early and you become one of their founding supporters — recognized, on the record, part of the rise from the beginning. Free for every verified human, built into rarelm.",
  },
  "Is Rarelm free?": {
    question: "Is Rarelm free?",
    answer:
      "Creating a verified account on Rarelm is free. Certain features, such as professional support and payments made with REM (Rarelm Encrypted Money), involve charges.",
  },
  "Can you earn money on Rarelm?": {
    question: "What does PageStock give early supporters?",
    answer:
      "Founding-supporter standing — recognition that you backed someone early, on the record, with a place in their story as they rise. PageStock is about being early and being real, not payouts. The platform also includes paid professional support and REM for in-app transactions.",
  },
  "Who is the founder of Rarelm?": {
    question: "Who is the founder of Rarelm?",
    answer:
      "Rarelm was founded by Ashutosh Kesharwani, who serves as its founder and CEO. He is building Rarelm as a founder through his company, MAVRIST TECH PVT LTD, based in Noida, India.",
  },
};

/** Site-facing FAQ copy — compliance-safe overrides without editing lib/faqData.ts */
export const displayFaqs: Faq[] = baseFaqs.map((item) => SAFE_OVERRIDES[item.question] ?? item);
