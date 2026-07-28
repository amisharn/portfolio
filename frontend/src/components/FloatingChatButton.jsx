function FloatingChatButton() {
  return (
    <button
      className="
        fixed
        bottom-8
        right-8
        z-50
        h-20
        w-50
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
      <span className="text-2xl text-cyan-400 hover:text-white transition-colors">
        Ask Amisha
      </span>
    </button>
  );
}

export default FloatingChatButton;
