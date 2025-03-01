// src/app/login/page.js
import Link from "next/link";
// import Image from "next/image";
import "./login.css";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login || সাপ্তাহিক আজকাল - Weekly Ajkal",

  openGraph: {
    type: "website",
    url: "https://www.ajkal.us/login",
    title: "সাপ্তাহিক আজকাল :: Weekly Ajkal",
    description:
      "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
    images: [
      {
        url: "https://ajkal.us/img/settings/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "সাপ্তাহিক আজকাল এর চিত্র",
      },
    ],
    site_name: "আজকাল",
  },
  twitter: {
    card: "summary_large_image",
    title: "সাপ্তাহিক আজকাল :: Weekly Ajkal",
    description:
      "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
    images: ["https://ajkal.us/img/settings/placeholder.jpg"],
  },
  canonicalUrl: "https://www.ajkal.us/login",
};

const page = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-1">
            <div className="card border-0 shadow-sm my-5 rounded-3">
              <div className="card-body p-0">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-center py-2">
                      <h3 className="text-muted mb-0">লগিন করুন !</h3>
                      <div className="text-muted mb-0">
                        সাপ্তাহিক আজকালে আপনাকে স্বাগতম।
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-lg-10 offset-1 mx-auto">
                        <LoginForm />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 sidebar-login">
                    <div className="image-overlay-login">
                      <div className="p-5 overlay-content">
                        <h1 className="text-center">
                          ফিরে আসার জন্য <br /> স্বাগত!
                        </h1>
                        <div className="text-center pt-3">
                          যদি আপনার বিজ্ঞাপনের তথ্য প্রয়োজন হয়, তবে আপনার লগইনের
                          পরে আপনার অ্যাকাউন্টে দেখানো হবে। <br/> অথবা
                          <Link href="/accounts" className="ps-2">
                            <span className="text-danger bg-white px-2 rounded-1">
                              এখানে ক্লিক করুন
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
