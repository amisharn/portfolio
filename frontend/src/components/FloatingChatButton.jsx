function FloatingChatButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        bottom-4
        right-4
        sm:bottom-6
        sm:right-6
        lg:bottom-8
        lg:right-8
        z-50
        h-14
        sm:h-16
        lg:h-16
        px-6
        sm:px-8
        lg:w-52
        flex
        items-center
        justify-center
        rounded-full
        border
        border-cyan-400
        bg-neutral-900/80
        backdrop-blur-md
        transition-all
        duration-300
        hover:scale-105 
      "
    >
      <span className="text-sm sm:text-lg lg:text-xl text-cyan-400  whitespace-nowrap">
        Ask Amisha
      </span>
    </button>
  );
}

export default FloatingChatButton;
