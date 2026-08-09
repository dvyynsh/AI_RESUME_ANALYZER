import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UploadCard from "../components/UploadCard";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <Hero />

      <UploadCard />

    </div>
  );
}

export default Home;