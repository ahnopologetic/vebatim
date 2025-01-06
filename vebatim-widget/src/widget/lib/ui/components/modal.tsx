import { AutoLayout, Line, Rectangle, Text } from '../..';
import { useModal } from '../../../hooks/use-modal';

interface ModalProps extends Omit<AutoLayoutProps, 'children'> { }

export const Modal = ({ ...rest }: ModalProps) => {
    const {
        closeModal,
        modal: {
            openedModal,
            modalContent: { title, children },
        },
    } = useModal();

    return (
        <AutoLayout
            name="Modal"
            width={'fill-parent'}
            x={{ type: 'left-right', leftOffset: 0, rightOffset: 0 }}
            y={{ type: 'top-bottom', topOffset: 0, bottomOffset: 0 }}
            positioning="absolute"
            height={'hug-contents'}
            overflow="scroll"
            direction="vertical"
            padding={{ vertical: 12, horizontal: 32 }}
            hidden={!openedModal}
            {...rest}
        >
            <Rectangle
                width="fill-parent"
                height="fill-parent"
                fill="#1f232880"
                x={{ type: 'left-right', leftOffset: 0, rightOffset: 0 }}
                y={{ type: 'top-bottom', topOffset: 0, bottomOffset: 0 }}
                positioning="absolute"
                onClick={closeModal}
            />
            <AutoLayout
                direction="vertical"
                width="fill-parent"
                spacing="auto"
                fill="#fff"
                cornerRadius={8}
            >
                <AutoLayout direction="vertical" width="fill-parent" fill="#fff">
                    <AutoLayout padding={6} verticalAlignItems="center" width="fill-parent" spacing="auto">
                        <AutoLayout
                            padding={{ vertical: 4, horizontal: 6 }}
                            verticalAlignItems="center"
                            width="fill-parent"
                            spacing="auto"
                        >
                            <Text fontSize={14} fontWeight="medium">{title}</Text>
                        </AutoLayout>
                        {/* TODO: add close button */}
                        <Text fontSize={12} fontWeight="medium">Close</Text> 
                    </AutoLayout>

                    <Line stroke={'$d0d7de'} strokeWidth={1} length={'fill-parent'} />
                </AutoLayout>

                <AutoLayout
                    padding={12}
                    direction="vertical"
                    width="fill-parent"
                    spacing="auto"
                    fill="#fff"
                    overflow="scroll"
                >
                    {typeof children === 'string' ? (
                        <Text fontSize={12} fontWeight="medium">{children}</Text>
                    ) : (
                        children
                    )}
                </AutoLayout>
            </AutoLayout>
        </AutoLayout>
    );
};