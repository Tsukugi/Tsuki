interface IHTMLViewer {
    rawHTML: string;
}
const HTMLViewer = (props: IHTMLViewer) => {
    const { rawHTML } = props;
    return (
        <div
            className="html-container"
            dangerouslySetInnerHTML={{ __html: rawHTML }}
        />
    );
};

export default HTMLViewer;
