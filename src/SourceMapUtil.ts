import { SourceMapConsumer, MappedPosition, RawSourceMap } from "source-map";

interface Something {
    (text: string): void
}

declare const log: Something;

export class SourceMapUtil {
    consumer: SourceMapConsumer;
    readonly rawSourceMap: RawSourceMap;

    constructor(sourceMap: string) {
        // Parse the source as JSON
        this.rawSourceMap = <RawSourceMap>JSON.parse(sourceMap);

        // Create the consumer
        this.consumer = new SourceMapConsumer(this.rawSourceMap);
    }

    public originalPositionFor(line: number, column: number): MappedPosition {
        return this.consumer.originalPositionFor({line: line, column: column});
    }
}
