import { Button } from "@/components/common";
import { Navbar } from "@/components/common/layouts";
import { Post } from "@/types/shared-types";
import Link from "next/link";

interface DetailsProps {
  item: Post;
}

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((item: Post) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const data = await res.json();

  return {
    props: { item: data },
  };
};

const Details = ({ item }: DetailsProps) => {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="max-w-xl py-10 mx-auto">
          <h1 className="text-2xl font-bold text-stone-800 uppercase">
            {item.title}
          </h1>
          <p className="text-sm text-stone-800 my-4">{item.body}</p>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
