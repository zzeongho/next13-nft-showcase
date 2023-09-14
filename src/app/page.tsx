import Introduce from "@/components/Introduce";
import MyNft from "@/components/MyNft";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Introduce />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> NFT Catalouge</h1>
          <p>Explore the NFTs you might like</p>
        </div>
      </div>
      <MyNft />
    </main>
  );
}
