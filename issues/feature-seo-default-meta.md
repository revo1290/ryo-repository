サイド全体の metadata をテンプレ化し、title template（例: "%s | サイト名"）とページ単位でのオーバーライドを実装する。対象: app/layout.tsx, 各 page の metadata, または新規 components/SEO.tsx を作成して再利用可能にする。受け入れ基準:
- デフォルトタイトル・description・open graph 等が layout 側で定義されている
- 各ページで必要に応じて title/description を上書きできる
- metadata が適切にレンダリングされること（SSR/静的ビルドで確認）