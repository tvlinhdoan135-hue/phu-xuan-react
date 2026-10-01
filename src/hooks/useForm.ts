import { useState } from "react";

export function useForm<T extends Record<string, unknown>>(
  giaTriBanDau: T,
  kiemChung: (duLieu: T) => Partial<Record<keyof T, string>>
) {
  const [duLieu, setDuLieu] =
    useState<T>(giaTriBanDau);

  const [daCham, setDaCham] =
    useState<Partial<Record<keyof T, boolean>>>({});

  const [dangGui, setDangGui] =
    useState(false);

  const loi = kiemChung(duLieu);

  const hopLe =
    Object.keys(loi).length === 0;

  function xuLyThayDoi(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    const target = e.target;

    const name = target.name as keyof T;

    const value =
      target instanceof HTMLInputElement &&
      target.type === "checkbox"
        ? target.checked
        : target.value;

    setDuLieu((truoc) => ({
      ...truoc,
      [name]: value,
    }));
  }

  function xuLyRoiO(
    e: React.FocusEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    const name = e.target.name as keyof T;

    setDaCham((truoc) => ({
      ...truoc,
      [name]: true,
    }));
  }

  function loiCuaO(
    ten: keyof T
  ) {
    return daCham[ten]
      ? loi[ten]
      : undefined;
  }

  function datLai() {
    setDuLieu(giaTriBanDau);
    setDaCham({});
    setDangGui(false);
  }

  function xuLyGui(
    guiDuLieu: (duLieu: T) => Promise<void>
  ) {
    return async (
      e: React.FormEvent<HTMLFormElement>
    ) => {
      e.preventDefault();

      const tatCaDaCham:
        Partial<Record<keyof T, boolean>> = {};

      Object.keys(giaTriBanDau).forEach((key) => {
        tatCaDaCham[key as keyof T] = true;
      });

      setDaCham(tatCaDaCham);

      const loiHienTai =
        kiemChung(duLieu);

      if (
        Object.keys(loiHienTai).length > 0
      ) {
        return;
      }

      try {
        setDangGui(true);

        await guiDuLieu(duLieu);
      } finally {
        setDangGui(false);
      }
    };
  }

  return {
    duLieu,
    loi,
    daCham,
    dangGui,
    hopLe,
    xuLyThayDoi,
    xuLyRoiO,
    loiCuaO,
    xuLyGui,
    datLai,
    setDuLieu,
  };
}