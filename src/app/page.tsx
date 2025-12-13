import { Nav } from "./components/nav/Nav";
import Body from "./components/home/Body";
import Footer from "./components/Footer";
import Hero from "./components/home/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ride Smarter, Arrive Faster, Your Reliable Ride-Hailing Partner",
  description:
    "Experience seamless, affordable rides across the city with our user-friendly app. Book in seconds, track in real-time, and enjoy safe, comfortable journeys every time. Whether it's daily commutes or late-night adventures, we've got you covered.",
  metadataBase: new URL("https://carrb.vercel.app"), // ensures absolute URLs for OG images
  icons: {
    icon: "/favicon-32x32.png",
  },
  openGraph: {
    title: "Ride Smarter, Arrive Faster, Your Reliable Ride-Hailing Partner",
    description:
      "Experience seamless, affordable rides across the city with our user-friendly app. Book in seconds, track in real-time, and enjoy safe, comfortable journeys every time. Whether it's daily commutes or late-night adventures, we've got you covered.",
    url: "https://carrb.vercel.app",
    siteName: "Carrb",
    images: [
      {
        url: "/favicon.png", // logo in your public folder
        width: 1200,
        height: 630,
        alt: "Carrb Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ride Smarter, Arrive Faster, Your Reliable Ride-Hailing Partner",
    description:
      "Experience seamless, affordable rides across the city with our user-friendly app. Book in seconds, track in real-time, and enjoy safe, comfortable journeys every time. Whether it's daily commutes or late-night adventures, we've got you covered.",
    images: ["/favicon-32x32.png"], // logo for Twitter card
  },
};

const Home = () => {
  return (
    // <Loader />
    <>
      <Nav />
      <Hero />
      <Body />
      <Footer />
      <div className="bg-[#1049A1] w-full m-0! p-0! h-[23px]"></div>
    </>
  );
};

export default Home;
