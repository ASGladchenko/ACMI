'use client';

export function FooterEmail() {
  const handleClick = () => {
    const email = 'info@acmi.direct';
    window.location.href = `mailto:${email}`;
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Send email"
      className="laptop:text-[17px] laptop:leading-[1.4] cursor-alias text-[15px] leading-[1.2] text-white"
    >
      info@acmi.direct
    </button>
  );
}
