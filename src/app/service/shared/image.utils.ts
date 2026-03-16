const size = {
  posterHome: 'w342',
  posterDetails: 'w500',
  backdrop: 'w1280',
};

export function imageUrl(image: string, sizes: string) {
  const baseUrl: string = 'https://image.tmdb.org/t/p';
  return `${baseUrl}/${sizes}/${image}`;
}
