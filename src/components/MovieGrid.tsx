export default function MovieGrid() {
  return (
    <div className="w-full h-full absolute inset-0">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/VN-vi-20260309-TRIFECTA-perspective_19f87dce-5ab6-408b-8881-903cd84e0d5a_large.jpg"
        srcSet="
          https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/VN-vi-20260309-TRIFECTA-perspective_19f87dce-5ab6-408b-8881-903cd84e0d5a_large.jpg 2000w,
          https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/VN-vi-20260309-TRIFECTA-perspective_19f87dce-5ab6-408b-8881-903cd84e0d5a_medium.jpg 1279w,
          https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/VN-vi-20260309-TRIFECTA-perspective_19f87dce-5ab6-408b-8881-903cd84e0d5a_small.jpg 959w
        "
        sizes="100vw"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
