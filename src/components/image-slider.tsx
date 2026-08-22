<button
          type="button"
          onClick={() => setSliderPosition(100)}
          className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
            sliderPosition > 80
              ? "bg-[#E52328] text-white shadow-lg scale-105"
              : "text-zinc-300 hover:text-white hover:bg-white/10"
          }`}
        >
          قبل
        </button>

        <button
          type="button"
          onClick={() => setSliderPosition(0)}
          className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
            sliderPosition < 20
              ? "bg-[#E52328] text-white shadow-lg scale-105"
              : "text-zinc-300 hover:text-white hover:bg-white/10"
          }`}
        >
          بعد
        </button>