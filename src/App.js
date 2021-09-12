import style from "./styles.module.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

import BgImage1 from "./assets/bg1.jpg";
import BgImage2 from "./assets/bg3.jpg";
import { data } from "./data/array";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <>
      <Header title="Header title" descr="Header description. Pokemon Game" />
      <Layout title="First Layout" urlBg={BgImage1}>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue.
        </p>
      </Layout>
      <Layout title="Second Layout" colorBg="#F2F2F2">
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue.
        </p>
        <p>
          To win, a majority of the total ten cards played (including the one
          card that is not placed on the board) must be of the player's card
          color. To do this, the player must capture cards by placing a card
          adjacent to an opponent's card whereupon the 'ranks' of the sides
          where the two cards touch will be compared. If the rank of the
          opponent's card is higher than the player's card, the player's card
          will be captured and turned into the opponent's color. If the player's
          rank is higher, the opponent's card will be captured and changed into
          the player's color instead.{" "}
        </p>
        <div className={style.flex}>
          {data.map((item) => {
            return (
              <PokemonCard
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                type={item.type}
                values={item.values}
              />
            );
          })}
        </div>
      </Layout>
      <Layout title="Third Layout" urlBg={BgImage2}>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue.
        </p>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
