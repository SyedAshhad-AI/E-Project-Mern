const Portfolio = () => {
  return (
    <div className="mx-auto my-10">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="rounded-3xl overflow-hidden flex flex-col justify-center items-center row-span-2">
          <img
            className="object-cover w-full h-full"
            src="/Images/hero01.jpg"
            alt="About Bringer"
          />
        </div>
        <div className="bg-slate-800 rounded-3xl p-6 flex flex-col text-left">
          <h2 className="text-6xl font-bold text-white mb-7">Cookie Dough</h2>
          <p className="text-xl text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Delectus
            dignissimos impedit error, aut iure, sunt ratione vel officiis
            minima quae laborum aliquam facere similique vitae ea numquam atque
            asperiores nam.
          </p>
        </div>
        <div className="flex flex-col col-span-2 space-y-4">
          <div className="flex flex-row gap-4">
            {/* Info Block */}
            <div className="bg-slate-800 rounded-3xl w-72 h-72 p-6 flex flex-col justify-center">
              <h2 className="font-bold text-lg text-gray-400">Client:</h2>
              <p className="text-lg mb-3 text-white">Doughp</p>

              <h2 className="font-bold text-lg text-gray-400">Service:</h2>
              <p className="text-xl text-white">Advertising</p>

              <h2 className="font-bold text-lg text-gray-400">Date:</h2>
              <p className="text-xl text-white">October 2023</p>
            </div>

            {/* Image */}
            <div className="rounded-3xl overflow-hidden w-72 h-72">
              <img
                className="object-cover w-full h-full"
                src="/Images/hero01.jpg"
                alt="About Bringer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
