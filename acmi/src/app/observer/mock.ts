export const mockAircrafts = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  model: 'Boeing 737-800',
  provider: `BestACMI-DummiesSupplier-${index + 1}`,
  msn: `${10000 + index}`,
  registration: `GG-WOW-${index + 1}`,
  dom: `01/${(index % 12) + 1}/201${index % 10}`, // Варьируем месяц и год
  layout: `${160 + (index % 20)}Y+${5 + (index % 10)}J`,
  bhPrice: `$${(2000 + index * 50).toLocaleString()}`,
  indicativePrice: `$${(180000 + index * 1000).toLocaleString()}`,
  imageUrl: `https://s3-alpha-sig.figma.com/img/09cc/1f86/3422898ca4e0587df2b2d5589a0c2e3e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LCMXh4zult0-lZsovWTjNo7--z2w1lfX6eWnZmbriquJW~xGTJqaiX9pCzrkGfzMluzBHql4-8AArO6SdNdzUe4QLMKQ-1Ln6EyG36-porCUtFsnRypHxBpIQgHWLpK8PP4lZ8Gw23DdiHbpaD-4xgN-fHRLuykSZ49iZJkJFMhAMuzJFw5TXpyyWn6ugczs9Pe9nnT7mnb0BeYWjZIPFcOaPx1zM4X67yBX5Cs~Chkxs~qaKiyZdo8UxvvtS-GFGAj1rsvh10hWDhcVXPuw06jCP8D4hEoWgRqVYtYGHSrFu3pelqp80ktmd1srI9YOiJC53R~pIabuMXstdBxJYQ__`,
}));
