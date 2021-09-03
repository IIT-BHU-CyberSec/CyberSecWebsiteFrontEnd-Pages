export default function ThumbnailImg({ src, minHeight, maxHeight }) {

    return (
        <div
            id="thumbnail-img"
            style={{
                minHeight: minHeight, maxHeight: maxHeight,
                borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit",
                background: `url(${src}) center no-repeat`, overflow: "hidden"
            }}
        ></div>
    );
}