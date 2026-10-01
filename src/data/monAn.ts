export interface MonAn {
    id: number;
    ten: string;
    danhMuc: string;
    gia: number;
    moTa: string;
}

export interface MonAnTrongGio extends MonAn {
    soLuong: number;
}

export const MON_AN: MonAn[] = [
    {
        id: 1,
        ten: "Bún bò Huế",
        danhMuc: "Món nước",
        gia: 45000,
        moTa: "Bún bò Huế đậm đà, thơm mùi sả và ruốc."
    },
    {
        id: 2,
        ten: "Cơm hến",
        danhMuc: "Cơm",
        gia: 35000,
        moTa: "Cơm hến truyền thống với rau sống và đậu phộng."
    },
    {
        id: 3,
        ten: "Bánh bèo",
        danhMuc: "Bánh Huế",
        gia: 30000,
        moTa: "Bánh bèo mềm, thơm, dùng cùng tôm cháy."
    },
    {
        id: 4,
        ten: "Bánh khoái",
        danhMuc: "Bánh Huế",
        gia: 35000,
        moTa: "Bánh khoái giòn, ăn cùng rau sống và nước lèo."
    },
    {
        id: 5,
        ten: "Nem lụi",
        danhMuc: "Món nướng",
        gia: 40000,
        moTa: "Nem lụi nướng thơm, dùng cùng rau sống."
    },
    {
        id: 6,
        ten: "Chè Huế",
        danhMuc: "Tráng miệng",
        gia: 20000,
        moTa: "Chè Huế truyền thống với nhiều hương vị."
    }
];

export const DANH_MUC: string[] = [
    "Tất cả",
    "Món nước",
    "Cơm",
    "Bánh Huế",
    "Món nướng",
    "Tráng miệng"
];