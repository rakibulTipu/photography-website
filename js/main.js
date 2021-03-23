// animate smooth scroll
$("#view-work").on("click", function () {
  const images = $("#images").position().top;

  $("html, body").animate(
    {
      scroolTop: images,
    },
    900
  );
});
