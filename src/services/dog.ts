export default async function getDog(setter: React.Dispatch<any>) {
   try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const dog = await res.json();

    console.log(dog)
    setter(dog.message);
   } catch(e) {
    setter("https://static.vecteezy.com/system/resources/previews/004/447/618/non_2x/design-layout-for-the-404-error-page-not-found-with-a-silhouette-of-a-cat-on-the-background-of-a-window-vector.jpg")
   }
}
