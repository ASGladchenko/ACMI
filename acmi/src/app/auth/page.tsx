import AuthBtn from './auth-btn';

export default async function AuthPage() {
  return (
    <section className="flex h-dvh w-dvw flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-blue-dark text-center text-[24px] leading-[30px] font-semibold">
        Log in to use ACMI Direct
      </h1>
      <AuthBtn />
    </section>
  );
}
