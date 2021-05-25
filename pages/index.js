import styles from "../styles/Home.module.css";
import Head from "next/head";
import Layout from '../components/layout';
import Section from "../components/section";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>sebazc | Home</title>
      </Head>
      <Layout>
        <Section>
          <h2 className="text-center">Welcome</h2>

          <div className="card">
            <div className="card-header">Art</div>
            <div className="card-body">
              <h5 className="card-title">Henry Purcell</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link href="/art/henry_purcell" passHref>
              <a className="btn btn-primary">
                Go
              </a>
              </Link>
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            adipisci minima quisquam dignissimos. Ipsa, labore ratione. Velit
            quis, iusto laboriosam ratione saepe, sequi iste beatae eveniet
            molestiae illo nostrum? Nihil alias odit minus, impedit delectus
            nemo corporis, ab in voluptatibus fuga nesciunt! Aliquid
            consequuntur sed quod molestiae repudiandae eius, repellendus saepe
            laboriosam ducimus tempora voluptatem repellat voluptas molestias
            hic itaque quas rerum corporis modi consectetur dicta doloribus
            nihil maiores! Minus facilis placeat at veniam, soluta eaque. Quas
            impedit accusamus veniam aliquam iure eligendi qui deserunt
            expedita. Nesciunt cum natus qui ducimus itaque nobis nostrum enim
            sit, quidem sapiente sint consequatur? A molestias possimus dolor
            laborum distinctio voluptatem neque fugit exercitationem, vero
            cupiditate? Mollitia obcaecati quidem accusantium unde modi incidunt
            quod at voluptates consequatur corrupti quasi aspernatur, rerum
            tempore sit labore reiciendis accusamus nobis exercitationem maiores
            asperiores dolorum cumque qui eligendi? Impedit nostrum,
            exercitationem ea obcaecati corrupti nesciunt nihil soluta, autem
            deserunt culpa nobis aut facilis natus, laboriosam alias beatae
            odio. Beatae sit tempora voluptatem eius commodi autem natus
            dignissimos iusto repellendus vitae ipsam, impedit sunt provident
            similique! Ullam atque mollitia consequuntur, magni beatae, nam
            quidem aspernatur quaerat eos esse, a perspiciatis? Mollitia quidem
            aliquam accusantium illum sequi ipsam, odio autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            adipisci minima quisquam dignissimos. Ipsa, labore ratione. Velit
            quis, iusto laboriosam ratione saepe, sequi iste beatae eveniet
            molestiae illo nostrum? Nihil alias odit minus, impedit delectus
            nemo corporis, ab in voluptatibus fuga nesciunt! Aliquid
            consequuntur sed quod molestiae repudiandae eius, repellendus saepe
            laboriosam ducimus tempora voluptatem repellat voluptas molestias
            hic itaque quas rerum corporis modi consectetur dicta doloribus
            nihil maiores! Minus facilis placeat at veniam, soluta eaque. Quas
            impedit accusamus veniam aliquam iure eligendi qui deserunt
            expedita. Nesciunt cum natus qui ducimus itaque nobis nostrum enim
            sit, quidem sapiente sint consequatur? A molestias possimus dolor
            laborum distinctio voluptatem neque fugit exercitationem, vero
            cupiditate? Mollitia obcaecati quidem accusantium unde modi incidunt
            quod at voluptates consequatur corrupti quasi aspernatur, rerum
            tempore sit labore reiciendis accusamus nobis exercitationem maiores
            asperiores dolorum cumque qui eligendi? Impedit nostrum,
            exercitationem ea obcaecati corrupti nesciunt nihil soluta, autem
            deserunt culpa nobis aut facilis natus, laboriosam alias beatae
            odio. Beatae sit tempora voluptatem eius commodi autem natus
            dignissimos iusto repellendus vitae ipsam, impedit sunt provident
            similique! Ullam atque mollitia consequuntur, magni beatae, nam
            quidem aspernatur quaerat eos esse, a perspiciatis? Mollitia quidem
            aliquam accusantium illum sequi ipsam, odio autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            adipisci minima quisquam dignissimos. Ipsa, labore ratione. Velit
            quis, iusto laboriosam ratione saepe, sequi iste beatae eveniet
            molestiae illo nostrum? Nihil alias odit minus, impedit delectus
            nemo corporis, ab in voluptatibus fuga nesciunt! Aliquid
            consequuntur sed quod molestiae repudiandae eius, repellendus saepe
            laboriosam ducimus tempora voluptatem repellat voluptas molestias
            hic itaque quas rerum corporis modi consectetur dicta doloribus
            nihil maiores! Minus facilis placeat at veniam, soluta eaque. Quas
            impedit accusamus veniam aliquam iure eligendi qui deserunt
            expedita. Nesciunt cum natus qui ducimus itaque nobis nostrum enim
            sit, quidem sapiente sint consequatur? A molestias possimus dolor
            laborum distinctio voluptatem neque fugit exercitationem, vero
            cupiditate? Mollitia obcaecati quidem accusantium unde modi incidunt
            quod at voluptates consequatur corrupti quasi aspernatur, rerum
            tempore sit labore reiciendis accusamus nobis exercitationem maiores
            asperiores dolorum cumque qui eligendi? Impedit nostrum,
            exercitationem ea obcaecati corrupti nesciunt nihil soluta, autem
            deserunt culpa nobis aut facilis natus, laboriosam alias beatae
            odio. Beatae sit tempora voluptatem eius commodi autem natus
            dignissimos iusto repellendus vitae ipsam, impedit sunt provident
            similique! Ullam atque mollitia consequuntur, magni beatae, nam
            quidem aspernatur quaerat eos esse, a perspiciatis? Mollitia quidem
            aliquam accusantium illum sequi ipsam, odio autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            adipisci minima quisquam dignissimos. Ipsa, labore ratione. Velit
            quis, iusto laboriosam ratione saepe, sequi iste beatae eveniet
            molestiae illo nostrum? Nihil alias odit minus, impedit delectus
            nemo corporis, ab in voluptatibus fuga nesciunt! Aliquid
            consequuntur sed quod molestiae repudiandae eius, repellendus saepe
            laboriosam ducimus tempora voluptatem repellat voluptas molestias
            hic itaque quas rerum corporis modi consectetur dicta doloribus
            nihil maiores! Minus facilis placeat at veniam, soluta eaque. Quas
            impedit accusamus veniam aliquam iure eligendi qui deserunt
            expedita. Nesciunt cum natus qui ducimus itaque nobis nostrum enim
            sit, quidem sapiente sint consequatur? A molestias possimus dolor
            laborum distinctio voluptatem neque fugit exercitationem, vero
            cupiditate? Mollitia obcaecati quidem accusantium unde modi incidunt
            quod at voluptates consequatur corrupti quasi aspernatur, rerum
            tempore sit labore reiciendis accusamus nobis exercitationem maiores
            asperiores dolorum cumque qui eligendi? Impedit nostrum,
            exercitationem ea obcaecati corrupti nesciunt nihil soluta, autem
            deserunt culpa nobis aut facilis natus, laboriosam alias beatae
            odio. Beatae sit tempora voluptatem eius commodi autem natus
            dignissimos iusto repellendus vitae ipsam, impedit sunt provident
            similique! Ullam atque mollitia consequuntur, magni beatae, nam
            quidem aspernatur quaerat eos esse, a perspiciatis? Mollitia quidem
            aliquam accusantium illum sequi ipsam, odio autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            adipisci minima quisquam dignissimos. Ipsa, labore ratione. Velit
            quis, iusto laboriosam ratione saepe, sequi iste beatae eveniet
            molestiae illo nostrum? Nihil alias odit minus, impedit delectus
            nemo corporis, ab in voluptatibus fuga nesciunt! Aliquid
            consequuntur sed quod molestiae repudiandae eius, repellendus saepe
            laboriosam ducimus tempora voluptatem repellat voluptas molestias
            hic itaque quas rerum corporis modi consectetur dicta doloribus
            nihil maiores! Minus facilis placeat at veniam, soluta eaque. Quas
            impedit accusamus veniam aliquam iure eligendi qui deserunt
            expedita. Nesciunt cum natus qui ducimus itaque nobis nostrum enim
            sit, quidem sapiente sint consequatur? A molestias possimus dolor
            laborum distinctio voluptatem neque fugit exercitationem, vero
            cupiditate? Mollitia obcaecati quidem accusantium unde modi incidunt
            quod at voluptates consequatur corrupti quasi aspernatur, rerum
            tempore sit labore reiciendis accusamus nobis exercitationem maiores
            asperiores dolorum cumque qui eligendi? Impedit nostrum,
            exercitationem ea obcaecati corrupti nesciunt nihil soluta, autem
            deserunt culpa nobis aut facilis natus, laboriosam alias beatae
            odio. Beatae sit tempora voluptatem eius commodi autem natus
            dignissimos iusto repellendus vitae ipsam, impedit sunt provident
            similique! Ullam atque mollitia consequuntur, magni beatae, nam
            quidem aspernatur quaerat eos esse, a perspiciatis? Mollitia quidem
            aliquam accusantium illum sequi ipsam, odio autem.
          </p>
        </Section>
      </Layout>
    </div>
  );
}
