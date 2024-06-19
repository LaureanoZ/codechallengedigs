import { ThemedView } from './ThemedView';
import { ThemedText, ThemedTextProps } from './ThemedText';

interface Props {
  title: string;
  style?: ThemedTextProps['type'];
}

export const TitleDate = ({ title, style = 'defaultSemiBold' }: Props) => {
  return (
    <ThemedView style={{ height: 50, justifyContent: 'center' }}>
      <ThemedText type={style}>{title}</ThemedText>
    </ThemedView>
  );
}
