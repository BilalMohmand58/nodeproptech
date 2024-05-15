import Link from "next/link";

const CardBody = ({ post }) => {
  const { title, shortDiscription, slug, thumbnail, date } = post?.fields;

  return (
    <>
      <div className="item">
        <img
          src={"https:" + thumbnail?.fields?.file?.url}
          alt=""
          className="moving_img"
        />
        <p className="fn_date">
          <span>{date}</span>
        </p>
        <h3 className="fn_title">
          <Link legacyBehavior href="/blog-single">
            <a href={"/blog/" + slug}>{title}</a>
          </Link>
        </h3>
        <p className="fn_desc">{shortDiscription}</p>
        {/* <p className="fn_read">
          <a href={post.link} className="neoh_fn_button only_text">
          <span className="text">Read More</span>
          </a>
        </p> */}
        <p className="fn_read">
          <Link legacyBehavior href={"/blog/" + slug}>
            <a className="neoh_fn_button only_text">
              <span className="text">Read More</span>
            </a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default CardBody;
