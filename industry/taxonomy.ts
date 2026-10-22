// CNHOT 的分类与标签。类别 key 会出现在网址、API 和 RSS 中，上线后不要改。
export const CATEGORIES = [
  { key: "livelihood", label: "民生", section: "民生", guide: "就业、收入、消费、房产债务、教育育儿等直接影响普通人生活的具体变化。涉及制度规则本身时归制度成本；以执法行动为核心时归基层执法。" },
  { key: "institution", label: "制度成本", section: "制度成本", guide: "社保、医保、养老、公积金、税费、户籍等制度规则和缴费负担的出台、调整与实际影响。具体基层执法冲突归基层执法。" },
  { key: "controversy", label: "舆论争议", section: "舆论争议", guide: "删帖控评、平台限流、公开回应、测评争议及相关诉讼等有明确当事方和可核实进展的公共争议。不把单纯热度或情绪当成事件。" },
  { key: "enforcement", label: "基层执法", section: "基层执法", guide: "政策在基层的具体执行、执法冲突、罚款、拆迁、维权与信访。规则本身的调整归制度成本。" },
  { key: "opinion", label: "观点", section: "观点", guide: "以作者的解释、判断、个人自述、访谈或海外视角为主要价值的内容；报道一个已发生事件时仍按事件所属类别归类。", commentary: true },
] as const satisfies ReadonlyArray<{ key: string; label: string; feedLabel?: string; section: string; guide: string; commentary?: true }>;

// 本站没有与“新模型发布”对应的统一发布指标。
export const RELEASE: { category: string; tag: string; unit: string } | null = null;

/** 周报月报总述中不要求逐篇证明的通用缩写。 */
export const PLAIN_TERMS: readonly string[] = [];

/** 框架固定的内容类型键；本站的含义写在 prompts/content-understanding.md。 */
export const ITEM_TYPES = ["model_release", "product_launch", "tool_or_prompt", "research_paper", "industry_event", "opinion_analysis", "tutorial_explainer"] as const;

/** 第一个标签对应主类别；“其他”只在材料不足时兜底。 */
export const CATEGORY_TAGS = ["民生", "制度成本", "舆论争议", "基层执法", "观点", "其他"] as const;

/** 其余标签描述具体议题或内容形态。 */
export const TOPIC_TAGS = [
  "就业/收入", "消费", "资产/房产", "社保/医保", "教育/育儿", "舆论/删帖", "执法/基层治理", "政策/监管", "个体叙述", "数据/调查",
  "裁员", "欠薪", "灵活就业", "青年失业", "房贷断供", "降薪", "涨价", "退费", "断缴", "养老金", "城管", "罚款", "拆迁", "维权", "限流", "海外视角", "政策解读",
] as const;

/** 仅收录已确认要做主题页的四个平台。 */
export const ENTITY_TAGS = ["微博", "哔哩哔哩", "抖音", "微信视频号"] as const;

export const TAG_SYNONYMS: Readonly<Record<string, string>> = {
  "B站": "哔哩哔哩", bilibili: "哔哩哔哩", "视频号": "微信视频号", weibo: "微博",
  社保: "社保/医保", 医保: "社保/医保", 房产: "资产/房产", 就业: "就业/收入", 工资: "就业/收入",
  控评: "舆论/删帖", 删帖: "舆论/删帖", 执法: "执法/基层治理", 调查: "数据/调查", 数据: "数据/调查",
};

/** 平台账号上的用户内容不等于平台自己发布的内容。 */
export const ENTITIES: Record<string, { name: string; displayTag: string | null; aliases: string[]; otherNames?: string[] }> = {
  weibo: { name: "微博", displayTag: "微博", aliases: ["微博", "新浪微博", "Weibo"] },
  bilibili: { name: "哔哩哔哩", displayTag: "哔哩哔哩", aliases: ["哔哩哔哩", "B站", "Bilibili"] },
  douyin: { name: "抖音", displayTag: "抖音", aliases: ["抖音", "Douyin"] },
  "wechat-video": { name: "微信视频号", displayTag: "微信视频号", aliases: ["微信视频号", "视频号"] },
};

/** 防止中文标题或摘要凭空写入平台名称。 */
export const IDENTITY_LEXICON: ReadonlyArray<{ id: string; name: string; patterns: RegExp[] }> = [
  { id: "weibo", name: "微博", patterns: [/微博|\bweibo\b/i] },
  { id: "bilibili", name: "哔哩哔哩", patterns: [/哔哩哔哩|B站|\bbilibili\b/i] },
  { id: "douyin", name: "抖音", patterns: [/抖音|\bdouyin\b/i] },
  { id: "wechat-video", name: "微信视频号", patterns: [/微信视频号|视频号/] },
];

// 平台域名托管了大量用户内容，不能仅凭域名认定平台是发布方。
export const PUBLISHER_DOMAINS: ReadonlyArray<{ entityId: string; domains: readonly string[] }> = [];
export const IDENTITY_CONTEXT_ALIASES: ReadonlyArray<{ entityId: string; pattern: RegExp }> = [];
