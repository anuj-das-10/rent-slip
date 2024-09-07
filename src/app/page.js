import RentForm from "@/components/RentForm";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-[#111129] p-4 pt-16 md:p-24 overflow-hidden">
      {/* Gradient Blurry Balls */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-[#6D28D9] to-[#A855F7] blur-3xl opacity-30"></div> {/* Purplish Ball */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-[#DC2626] to-[#EF4444] blur-3xl opacity-30"></div> {/* Crimson Ball */}
      <div className="absolute bottom-[10rem] left-[6rem] w-[300px] h-[300px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] blur-3xl opacity-30"></div> {/* Blue Ball */}

      {/* Form Content */}
      <RentForm />
    </main>
  );
}
