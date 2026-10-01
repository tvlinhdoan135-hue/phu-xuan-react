import MonAnCard from "./MonAnCard";
import type { MonAn } from "../data/monAn";

interface MonAnListProps {
    monAn: MonAn[];
    onAdd: (mon: MonAn) => void;
}

function MonAnList({
    monAn,
    onAdd
}: MonAnListProps) {
    return (
        <div className="mon-list">
            {monAn.map((mon) => (
                <MonAnCard
                    key={mon.id}
                    mon={mon}
                    onAdd={onAdd}
                />
            ))}
        </div>
    );
}

export default MonAnList;