import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Contact :: Weekly Ajkal",
  description:
    "বাংলাদেশ ও বিশ্বসংবাদ সম্পর্কে সর্বশেষ আপডেট জানুন। এখানে পাবেন খেলাধুলা, রাজনীতি, চাকরি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল এবং আরও অনেক কিছু।",
  keywords:
    "আজকাল, খবর, আপডেট, বাংলাদেশ, বিশ্বসংবাদ, খেলাধুলা, রাজনীতি, বিনোদন, স্বাস্থ্য, লাইফস্টাইল",
  openGraph: {
    type: "website",
    url: "https://www.ajkal.us/contact",
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
  canonicalUrl: "https://www.ajkal.us/contact", // Ensure this is the correct URL
};
const page = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-6 english-font">
              <div style={{ borderBottom: "2px solid var(--secondary)" }}>
                <h1 className="fw-bold secondary-color">Contact Us</h1>
              </div>
              {/* Content In English */}
              <div className="pt-5">
                <h4 className="english-font">Head Office</h4>
                <div>71-16 35th Ave, Jackson Heights, NY 11372, USA</div>
                <ul>
                  <li>
                    Office: <Link href={"/"}>+1646 267-7751</Link>
                  </li>
                  <li>
                    Advertisement: <Link href={"/"}>+1646 267-7751</Link>
                  </li>
                  <li>
                    Fax: <Link href={"/"}>718-865-9130</Link>
                  </li>
                  <li>
                    ePaper: <Link href={"/"}>+1646 267-7751</Link> (10am-6pm,
                    Phone & WhatsApp)
                  </li>
                </ul>
                <h4 className="english-font">Email</h4>
                <div>info@ajkalusa.com</div>
                <ul>
                  <li>
                    Print Ad Sales: <Link href={"/"}>ad@ajkalusa.com</Link>
                  </li>
                  <li>
                    Digital Ad Sales:{" "}
                    <Link href={"/"}>adsales@ajkalusa.com</Link>
                  </li>
                  <li>Fax: +1646 267-7751</li>
                  <li>
                    ePaper: <Link href={"/"}>epaper@ajkalusa.com</Link>
                  </li>
                </ul>
                <h4 className="english-font">Follow us on</h4>
                <div>info@ajkalusa.com</div>
                <ul>
                  <li>
                    <Link href={"/"}>facebook.com/Dailyajkalusa</Link>
                  </li>
                  <li>
                    <Link href={"/"}>twitter.com/ajkalusa</Link>
                  </li>
                  <li>
                    <Link href={"/"}>instagram.com/ajkalusa</Link>
                  </li>
                  <li>
                    <Link href={"/"}>youtube.com/ajkalusa</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ borderBottom: "2px solid var(--secondary)" }}>
                <h1 className="text-muted fw-bold secondary-color">যোগাযোগ</h1>
              </div>
              {/* Content Start In Bangla */}
              <div className="pt-5">
                <h4 className="english-font">প্রধান কার্যালয়</h4>
                <div>
                  ৭১-১৬ ৩৫তম এভ, জ্যাকসন হাইটস, এনওয়াই ১১৩৭২, যুক্তরাষ্ট্র
                </div>
                <strong>ফোন</strong>
                <ul>
                  <li>
                    <Link href={"/"}>+১৬৪৬ ২৬৭-৭৭৫১</Link>
                  </li>
                </ul>
                <h4 className="english-font">ইমেইল</h4>
                <div>info@ajkalusa.com</div>
                <ul>
                  <li>
                    অফিস: <Link href={"/"}>info@ajkalusa.com</Link>
                  </li>
                  <li>
                    বার্তা বিভাগ: <Link href={"/"}>adsales@ajkalusa.com</Link>
                  </li>
                  <li>
                    সম্পাদকীয় বিভাগ:{" "}
                    <Link href={"/"}>adsales@ajkalusa.com</Link>
                  </li>
                  <li>
                    পত্রিকা বিজ্ঞাপন বিভাগ:{" "}
                    <Link href={"/"}>adsales@ajkalusa.com</Link>
                  </li>
                  <li>
                    ডিজিটাল বিজ্ঞাপন বিভাগ:{" "}
                    <Link href={"/"}>adsales@ajkalusa.com</Link>
                  </li>
                  <li>ফ্যাক্স: ০২ ৫৫০১২২০০, ০২ ৫৫০১২২১১</li>
                </ul>
                <h4>ওয়েবসাইট</h4>
                <Link href={"/"}>ajkalusa.com</Link>
                <h4 className="english-font pt-3">Follow us on</h4>
                <div>info@ajkalusa.com</div>
                <ul>
                  <li>
                    <Link href={"/"}>facebook.com/Dailyajkalusa</Link>
                  </li>
                  <li>
                    <Link href={"/"}>twitter.com/ajkalusa</Link>
                  </li>
                  <li>
                    <Link href={"/"}>instagram.com/ajkalusa</Link>
                  </li>
                  <li>
                    <Link href={"/"}>youtube.com/ajkalusa</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
