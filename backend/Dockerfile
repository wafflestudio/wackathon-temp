FROM openjdk:17-jdk-slim

WORKDIR /app

COPY . .

RUN ./gradlew bootJar

EXPOSE 8080

CMD java $JAVA_OPTS -jar build/libs/waffle-raise-0.0.1-SNAPSHOT.jar
