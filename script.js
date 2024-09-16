function predictSafety() {
    const radius = parseFloat(document.getElementById('radius').value);
    const texture = parseFloat(document.getElementById('texture').value);
    const perimeter = parseFloat(document.getElementById('perimeter').value);
    const area = parseFloat(document.getElementById('area').value);
    const smoothness = parseFloat(document.getElementById('smoothness').value);
    const compactness = parseFloat(document.getElementById('compactness').value);
    const concavity = parseFloat(document.getElementById('concavity').value);
    const concavePoints = parseFloat(document.getElementById('concavePoints').value);
    const symmetry = parseFloat(document.getElementById('symmetry').value);
    const fractalDimension = parseFloat(document.getElementById('fractalDimension').value);

    let safe = true;
    let result = 'Safe';
    let totalParameters = 10; // Total number of parameters
    let safeParameters = 0; // Number of safe parameters

    // Check each parameter against its range
    if (radius < 5 || radius > 30) {
        safe = false;
        document.getElementById('radiusResult').innerText = 'Unsafe';
    } else {
        document.getElementById('radiusResult').innerText = 'Safe';
        safeParameters++;
    }
    if (texture < 10 || texture > 40) {
        safe = false;
        document.getElementById('textureResult').innerText = 'Unsafe';
    } else {
        document.getElementById('textureResult').innerText = 'Safe';
        safeParameters++;
    }
    if (perimeter < 50 || perimeter > 200) {
        safe = false;
        document.getElementById('perimeterResult').innerText = 'Unsafe';
    } else {
        document.getElementById('perimeterResult').innerText = 'Safe';
        safeParameters++;
    }
    if (area < 100 || area > 3000) {
        safe = false;
        document.getElementById('areaResult').innerText = 'Unsafe';
    } else {
        document.getElementById('areaResult').innerText = 'Safe';
        safeParameters++;
    }
    if (smoothness < 0.05 || smoothness > 0.2) {
        safe = false;
        document.getElementById('smoothnessResult').innerText = 'Unsafe';
    } else {
        document.getElementById('smoothnessResult').innerText = 'Safe';
        safeParameters++;
    }
    if (compactness < 0.02 || compactness > 0.35) {
        safe = false;
        document.getElementById('compactnessResult').innerText = 'Unsafe';
    } else {
        document.getElementById('compactnessResult').innerText = 'Safe';
        safeParameters++;
    }
    if (concavity < 0 || concavity > 0.4) {
        safe = false;
        document.getElementById('concavityResult').innerText = 'Unsafe';
    } else {
        document.getElementById('concavityResult').innerText = 'Safe';
        safeParameters++;
    }
    if (concavePoints < 0 || concavePoints > 0.2) {
        safe = false;
        document.getElementById('concavePointsResult').innerText = 'Unsafe';
    } else {
        document.getElementById('concavePointsResult').innerText = 'Safe';
        safeParameters++;
    }
    if (symmetry < 0.1 || symmetry > 0.3) {
        safe = false;
        document.getElementById('symmetryResult').innerText = 'Unsafe';
    } else {
        document.getElementById('symmetryResult').innerText = 'Safe';
        safeParameters++;
    }
    if (fractalDimension < 0.05 || fractalDimension > 0.1) {
        safe = false;
        document.getElementById('fractalDimensionResult').innerText = 'Unsafe';
    } else {
        document.getElementById('fractalDimensionResult').innerText = 'Safe';
        safeParameters++;
    }

    if (!safe) {
        result = 'Unsafe';
    }

    document.getElementById('result').innerText = result;

    // Calculate and display probability percentage
    const probability = (safeParameters / totalParameters) * 100;
    document.getElementById('probability').innerText = `Probability: ${probability.toFixed(2)}%`;

    // Generate chart using Chart.js
    const ctx = document.getElementById('resultChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Radius', 'Texture', 'Perimeter', 'Area', 'Smoothness', 'Compactness', 'Concavity', 'Concave Points', 'Symmetry', 'Fractal Dimension'],
            datasets: [{
                label: 'Values',
                data: [radius, texture, perimeter, area, smoothness, compactness, concavity, concavePoints, symmetry, fractalDimension],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
