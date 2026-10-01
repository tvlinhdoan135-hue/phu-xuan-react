import { useCallback, useMemo, useState } from "react";
import type {
  MonAn,
  MonAnTrongGio,
} from "../data/monAn";

export function useGioHang() {
  const [gioHang, setGioHang] =
    useState<MonAnTrongGio[]>([]);

  const themVaoGio = useCallback(
    (mon: MonAn) => {
      setGioHang((cu) => {
        const daCo = cu.find(
          (item) => item.id === mon.id
        );

        if (daCo) {
          return cu.map((item) =>
            item.id === mon.id
              ? {
                  ...item,
                  soLuong: item.soLuong + 1,
                }
              : item
          );
        }

        return [
          ...cu,
          {
            ...mon,
            soLuong: 1,
          },
        ];
      });
    },
    []
  );

  const tangSoLuong = useCallback(
    (id: number) => {
      setGioHang((cu) =>
        cu.map((mon) =>
          mon.id === id
            ? {
                ...mon,
                soLuong: mon.soLuong + 1,
              }
            : mon
        )
      );
    },
    []
  );

  const giamSoLuong = useCallback(
    (id: number) => {
      setGioHang((cu) =>
        cu
          .map((mon) =>
            mon.id === id
              ? {
                  ...mon,
                  soLuong: mon.soLuong - 1,
                }
              : mon
          )
          .filter(
            (mon) => mon.soLuong > 0
          )
      );
    },
    []
  );

  const xoaMon = useCallback(
    (id: number) => {
      setGioHang((cu) =>
        cu.filter(
          (mon) => mon.id !== id
        )
      );
    },
    []
  );

  const xoaTatCa = useCallback(() => {
    setGioHang([]);
  }, []);

  const tongSoLuong = useMemo(() => {
    return gioHang.reduce(
      (tong, mon) =>
        tong + mon.soLuong,
      0
    );
  }, [gioHang]);

  const tongTien = useMemo(() => {
    return gioHang.reduce(
      (tong, mon) =>
        tong + mon.gia * mon.soLuong,
      0
    );
  }, [gioHang]);

  return {
    gioHang,
    themVaoGio,
    tangSoLuong,
    giamSoLuong,
    xoaMon,
    xoaTatCa,
    tongSoLuong,
    tongTien,
  };
}