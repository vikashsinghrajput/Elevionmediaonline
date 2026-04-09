
import logo from "../../assets/VideoEditing.png";
export default function WhiteServicesUI() {
  const services = [
    {
      title: "Video Editing",
      img: logo,
      tag: "VIDEO",
      bg: "bg-[#fff7ed]",
    },
    {
      title: "Graphic Design",
      img: "/images/graphic.jpg",
      tag: "DESIGN",
      bg: "bg-[#fefce8]",
    },
    {
      title: "Website Design",
      img: "/images/web.jpg",
      tag: "WEB",
      bg: "bg-[#fff1f2]",
    },
    {
      title: "Product Photography",
      img: "/images/product.jpg",
      tag: "PHOTO",
      bg: "bg-[#fef3c7]",
    },
    {
      title: "Marketing & Growth",
      img: "/images/marketing.jpg",
      tag: "ADS / AI",
      bg: "bg-[#f9fafb]",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#fff7ed] via-white to-[#fffaf0] py-20 px-6 mt-5">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 mb-24">
        
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-[#7c2d12]">
          Divine Digital <br />
          Growth Solutions
        </h1>

        <p className="text-[#6b7280] text-lg leading-relaxed">
          We help spiritual brands grow with devotion-driven design,
          powerful content and soulful storytelling.
          From darbar promotions to भक्त community growth,
          we deliver divine results.
        </p>
      </div>

      {/* SERVICE CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        
        {services.map((item, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-t-[160px] rounded-b-3xl ${item.bg} 
            border border-yellow-100 
            transition-all duration-500 
            hover:-translate-y-3 
            hover:shadow-[0_20px_40px_rgba(255,183,77,0.4)]`}
          >
            
            <img
              src={item.img}
              alt={item.title}
              className="h-[420px] w-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />

            {/* GOLDEN OVERLAY GLOW */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#f59e0b]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* TOP TAG */}
            <div className="absolute top-6 inset-x-0 text-center">
              <span className="text-xs font-semibold tracking-widest text-[#92400e]">
                {item.tag}
              </span>
            </div>

            {/* TITLE */}
            <div className="absolute bottom-6 inset-x-0 text-center">
              <h3 className="text-[#78350f] text-lg font-semibold">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER SERVICES */}
      <div className="max-w-7xl mx-auto mt-16 text-center text-[#a16207] text-sm tracking-wide">
        Social Media Seva • Bhakti Branding • Darbar Promotion • Spiritual Growth
      </div>

    </section>
  );
}