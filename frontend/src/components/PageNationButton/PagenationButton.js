export const PaginationControls = ({ onPrev, onNext, hasPrev, hasNext }) => {
    return (
        <div className="btn">
            <button onClick={onPrev} disabled={!hasPrev}>
                前へ
            </button>
            <button onClick={onNext} disabled={!hasNext}>
                次へ
            </button>
        </div>
    );
};
