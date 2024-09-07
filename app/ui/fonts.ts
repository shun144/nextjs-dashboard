// next/font配下のフォントは自動的に最適化する
// 具体的にはビルド時にカスタムフォントを静的アセットにすることで
// レイアウトシフト（フォントの読込が遅延することで発生するレイアウトのずれ）
// を防ぐ。

// Inter：Google Fontsの「Inter」フォントを簡単に利用するためのモジュール
import { Inter } from 'next/font/google';


import { Lusitana } from 'next/font/google';

// subsets: ['latin'] と指定すると、ラテン文字だけがインポートされ、不要な他の言語の文字はダウンロードされません。これにより、ページの読み込み速度が向上する
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana(
  {
    weight: ['400', '700'],
    subsets: ['latin']
  });